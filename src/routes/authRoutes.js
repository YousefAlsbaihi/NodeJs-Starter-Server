const express = require('express');
const bcrypt = require('bcryptjs');
const { verifyToken, generateToken, comparePasswords, isValidEmail, isValidPassword } = require('../utils/auth');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const hasPermission = require('../utils/hasPermission');
require('dotenv').config();
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads/profile_pictures'); // Specify the directory for uploads
    },
    filename: function (req, file, cb) {
        const extension = path.extname(file.originalname);
        const name = (Date.now() + "-" + Math.round(Math.random() * 1e9))
        cb(null, name + extension); // Use the original filename with extension
    }
});

const upload = multer({ storage: storage });



/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Signup user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Signup'
 *     responses:
 *       200:
 *         description: Operation successful
 *       400:
 *         description: Bad request, error Signing Up
 */


// Data Example
// {
//     "email":"email@1example.com",
//     "password": "123456",
//     "name": "John Doe",
//     "profile_picture": "data:image/png;base64,iVBORw0KGgo..."
// }


router.post('/register', async (req, res) => {
    try {
        const { name, password, email, profile_picture } = req.body;

        // Validate entries

        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                code: 101,
                message: 'Enter a valid email address'
            });
        }

        if (!isValidPassword(password)) {
            return res.status(400).json({ success: false, code: 102, message: 'Password must be at least ' + process.env.MIN_PASSWORD + ' or more characters' });
        }



        const hashedPassword = await bcrypt.hash(password, 10);

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, code: 103, message: 'Email is already in use' });
        }

        let picture = null;

        // Check if profile_picture is submitted
        if (profile_picture) {
            try {
                // Decode Base64 image string
                const base64Image = profile_picture.split(';base64,').pop();
                const imagePath = path.join(__dirname, '..', 'uploads', 'profile_pictures', `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`);

                fs.writeFileSync(imagePath, base64Image, { encoding: 'base64' });

                picture = `/uploads/profile_pictures/${path.basename(imagePath)}`;
            } catch (error) {
                return res.status(400).json({ success: false, code: 104, message: 'Error saving profile picture', error: error.message });
            }
        }

        const user = new User({
            name,
            password: hashedPassword,
            email,
            profile_picture: picture,
            permissions: 'update_profile'
        });

        await user.save();
        res.status(200).json({ success: true, code: 201, message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ success: false, code: 105, message: 'Error registering user', error: error.message });
    }
});



/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Operation successful
 *       401:
 *         description: Unauthorized, invalid credentials
 *       400:
 *         description: Bad request, error logging in
 */


// Data Example
// {
//     "email":"email@example.com",
//     "password": "123456",
// }
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await comparePasswords(password, user.password))) {
            return res.status(401).json({ success: false, code: 106, message: 'Invalid credentials' });
        }

        const { password: userPassword, ...userWithoutPassword } = user.toObject();

        const token = generateToken(user);
        res.status(200).json({
            success: true,
            code: 202,
            token,
            user: userWithoutPassword,
        });
    } catch (error) {
        res.status(400).json({ success: false, code: 107, message: 'Error logging in', error: error.message });
    }
});


/**
 * @swagger
 * /auth/update:
 *   put:
 *     summary: Update user account
 *     tags:
 *       - Authentication
 *     security: 
 *        [{ BearerAuth: []}]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Update_account'
 *     responses:
 *       200:
 *         description: Operation successful
 *       403:
 *         description: Forbidden, Not enough permission to perform operation
 *       400:
 *         description: Bad request, error updating
 *       401:
 *         description: Token not provided
 */

// Data example
// {
//     "email":"email@example.com",
//     "password": "123456",
//     "name": "John Doe",
//     "profile_picture": "data:image/png;base64,iVBORw0KGgo..."
// }

router.put('/update', hasPermission('update_profile'), async (req, res) => {
    try {
        upload.single('file')(req, res, async () => {
            const { user } = req; // Get user object directly from the request
            const { name, email, password, profile_picture } = req.body;
            // Update user details
            if (name) {
                user.name = name;
            }
            if (email && email !== user.email) {
                // Check if the email already exists in the database
                const existingUser = await User.findOne({ email: email });

                if (existingUser) {
                    return res.status(400).json({ success: false, code: 113, message: 'Email is already taken by another user' });
                }

                user.email = email;
            }


            if (password && !isValidPassword(password)) {
                return res.status(400).json({ success: false, code: 102, message: 'Password must be at least ' + process.env.MIN_PASSWORD + ' or more characters' });
            }

            if (password && isValidPassword(password)) {
                const hashedPassword = await bcrypt.hash(password, 10);
                user.password = hashedPassword;
            }

            // Check if profile_picture is uploaded
            if (req.file) {
                if (user.profile_picture) {
                    // Construct the file path
                    const filePath = path.join(__dirname, '..', user.profile_picture);

                    // Check if the file exists, then delete it
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath);
                    }
                }

                user.profile_picture = "/uploads/profile_pictures/" + req.file.filename;
            }


            await user.save();
            const newToken = generateToken(user);
            // Exclude password from user object
            const { password: _, ...userWithoutPassword } = user.toObject();

            res.status(200).json({
                success: true,
                code: 203,
                token: newToken,
                user: userWithoutPassword,
            });
        });
    } catch (error) {
        res.status(400).json({ success: false, code: 112, message: 'Error updating user details', error: error.message });
    }
});

module.exports = router;
