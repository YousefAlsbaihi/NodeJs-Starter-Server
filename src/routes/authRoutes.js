const express = require('express');
const bcrypt = require('bcryptjs');
const { verifyToken, generateToken, comparePasswords, isValidEmail, isValidPassword } = require('../utils/auth');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const hasPermission = require('../utils/hasPermission');
require('dotenv').config();

const main_upload_folder = process.env.MAIN_UPLOAD_FOLDER
const profile_pictures_upload_folder = process.env.PROFILE_PICTURES_UPLOAD_FOLDER

const { createStorage, createUploadMiddleware } = require('../utils/multerSetup');
const storage = createStorage(`src/${main_upload_folder}/${profile_pictures_upload_folder}`);
const uploadMiddleware = createUploadMiddleware(storage);

const router = express.Router();


router.post('/register', uploadMiddleware.single('file'), async (req, res) => {
    try {
        let { name, password, email } = req.body;
        // email = email.toLowerCase();
        let picture = null;
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

        // Check if profile_picture is uploaded
        if (req.file) {
            picture = `/${main_upload_folder}/${profile_pictures_upload_folder}/` + req.file.filename;
        }



        const user = new User({
            name,
            password: hashedPassword,
            email,
            profile_picture: picture,
            permissions: ['update_profile', 'delete_account']
        });

        await user.save();
        res.status(200).json({ success: true, code: 201, message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ success: false, code: 105, message: 'Error registering user', error: error.message });
    }
});


router.post('/login', uploadMiddleware.single(), async (req, res) => {
    try {
        let { email, password } = req.body;
        // email = email.toLowerCase();
        const user = await User.findOne({ email });

        if (!user || !(await comparePasswords(password, user.password))) {
            return res.status(401).json({ success: false, code: 106, message: 'Invalid credentials' });
        }

        if (!user.active) {
            return res.status(401).json({ success: false, code: 115, message: 'Your account is banned' });
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



router.put('/update', hasPermission('update_profile'), uploadMiddleware.single('file'), async (req, res) => {
    try {
        const { user } = req; // Get user object directly from the request
        let { name, email, password } = req.body;

        // Update user details
        if (name) {
            user.name = name;
        }
        if (email && email !== user.email) {
            // email = email.toLowerCase();
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

            user.profile_picture = `/${main_upload_folder}/${profile_pictures_upload_folder}/` + req.file.filename;
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

    } catch (error) {
        res.status(400).json({ success: false, code: 112, message: 'Error updating user details', error: error.message });
    }
});



router.delete('/delete-account', hasPermission('delete_account'), uploadMiddleware.single(), async (req, res) => {
    try {
        // const { userId } = req.params;
        const { user } = req;
        const { password } = req.body;


        if (!password) {
            return res.status(404).json({ success: false, code: 344, message: 'Enter your password to confirm delete' });
        }


        // Retrieve the user from the database
        const finUser = await User.findById(user._id);

        if (!finUser) {
            return res.status(404).json({ success: false, code: 340, message: 'User not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, finUser.password);

        if (!isPasswordValid) {
            return res.status(400).json({ success: false, code: 341, message: 'Incorrect password' });
        }

        // Proceed with the delete operation
        const deletedUser = await User.findByIdAndDelete(user._id);

        if (!deletedUser) {
            return res.status(400).json({ success: false, code: 342, message: 'Something went wrong, Try again later' });
        }


        res.status(200).json({
            success: true,
            code: 509,
            message: "User Deleted successfully !",
        });

    } catch (error) {
        res.status(400).json({ success: false, code: 344, message: 'Error deleting user details', error: error.message });
    }
});



module.exports = router;
