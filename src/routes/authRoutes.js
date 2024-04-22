const express = require('express');
const bcrypt = require('bcryptjs');
const { verifyToken, generateToken, comparePasswords, isValidEmail, isValidPassword, isValidUsername } = require('../utils/auth');
const fs = require('fs');
const path = require('path');
const User = require('../models/User');
require('dotenv').config();
const router = express.Router();


/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Signup'
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Bad request, validation failed or email already in use
 *       500:
 *         description: Internal server error
 */



// Data Example
// {
//     "email":"email@1example.com",
//     "password": "123456",
//     "name": "John Doe",
//     "profile_picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
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
            profile_picture: picture
        });

        await user.save();

        res.status(201).json({ success: true, code: 201, message: 'User registered successfully' });
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
 *         description: Login successful
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

        const token = generateToken(user);
        res.json({
            success: true,
            code: 202,
            token,
            user: {
                name: user.name,
                email: email,
                profile_picture: user.profile_picture
            },
        });
    } catch (error) {
        res.status(400).json({ success: false, code: 107, message: 'Error logging in', error: error.message });
    }
});





/**
 * @swagger
 * /auth/update:
 *   put:
 *     summary: Update user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Update'
 *     responses:
 *       200:
 *         description: Update successful
 *       401:
 *         description: Unauthorized, invalid credentials
 *       400:
 *         description: Bad request, error logging in
 */

// Data example
// {
//     "email":"email@example.com",
//     "password": "123456",
//     "name": "John Doe",
//     "profile_picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
// }

router.put('/update', async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Extract JWT token from Authorization header
        if (!token) {
            return res.status(401).json({ success: false, code: 108, message: 'No token provided' });
        }

        const decoded = verifyToken(token); // Verify and decode JWT token
        if (!decoded) {
            return res.status(401).json({ success: false, code: 109, message: 'Invalid token' });
        }

        const { id } = decoded; // Extract user ID from decoded token
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ success: false, code: 110, message: 'User not found' });
        }
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
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            user.password = hashedPassword;
        }

        if (profile_picture) {
            try {
                // Decode Base64 image string
                const base64Image = profile_picture.split(';base64,').pop();
                const imagePath = path.join(__dirname, '..', 'uploads', 'profile_pictures', `${Date.now()}-${Math.round(Math.random() * 1e9)}.png`);

                fs.writeFileSync(imagePath, base64Image, { encoding: 'base64' });

                picture = `/uploads/profile_pictures/${path.basename(imagePath)}`;
            } catch (error) {
                return res.status(400).json({ success: false, code: 111, message: 'Error saving profile picture', error: error.message });
            }
        }


        await user.save();
        const newToken = generateToken(user);

        res.json({
            success: true,
            code: 203,
            token: newToken,
            user: {
                name: user.name,
                email: user.email,
                profile_picture: user.profile_picture
            },
        });
    } catch (error) {
        res.status(400).json({ success: false, code: 112, message: 'Error updating user details', error: error.message });
    }
});

module.exports = router;
