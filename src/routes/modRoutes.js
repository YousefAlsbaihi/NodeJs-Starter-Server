const express = require('express');
const User = require('../models/User');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const hasPermission = require('../utils/hasPermission');

require('dotenv').config();
const main_upload_folder = process.env.MAIN_UPLOAD_FOLDER
const profile_pictures_upload_folder = process.env.PROFILE_PICTURES_UPLOAD_FOLDER


const { createStorage, createUploadMiddleware } = require('../utils/multerSetup');
const storage = createStorage(`src/${main_upload_folder}/${profile_pictures_upload_folder}`);
const uploadMiddleware = createUploadMiddleware(storage);


const router = express.Router();
const { isValidEmail, isValidPassword } = require('../utils/auth');


/**
 * @swagger
 * /mod/users:
 *   get:
 *     summary: Retrieve a list of users
 *     tags:
 *       - Moderator
 *     security: 
 *       - BearerAuth: []
 *     responseType: array
 *     parameters: [
 *         {
 *           in: 'query',
 *           name: 'page',
 *           description: 'The page number to retrieve',
 *           schema: {
 *             type: 'integer',
 *             minimum: 1,
 *           },
 *         },
 *         {
 *           in: 'query',
 *           name: 'limit',
 *           description: 'The number of users per page',
 *           schema: {
 *             type: 'integer',
 *             minimum: 1,
 *             maximum: 100,
 *           },
 *         },
 *         {
 *           in: 'query',
 *           name: 'sort',
 *           description: 'The field to sort the users by',
 *           schema: {
 *             type: 'string',
 *             enum: ['createdAt', 'updatedAt'],
 *           },
 *         },
 *         {
 *           in: 'query',
 *           name: 'order',
 *           description: 'The sort order (asc or desc)',
 *           schema: {
 *             type: 'string',
 *             enum: ['asc', 'desc'],
 *           },
 *         },
 *       ]
 *     responses:
 *       200:
 *         description: Operation Successful
 *       403:
 *         description: Forbidden, Not enough permission to perform operation
 *       401:
 *         description: Token not provided
 */

router.get('/users', hasPermission('mod_all_users'), async (req, res) => {
    try {
        let { page = 1, limit = process.env.MOD_PER_PAGE_USERS, sort = 'createdAt', order = 'desc' } = req.query;

        // Validate and parse query parameters
        page = parseInt(page);
        limit = parseInt(limit);

        if (isNaN(page) || page < 1) {
            return res.status(400).json({ success: false, code: 301, message: 'Invalid page number' });
        }

        if (isNaN(limit) || limit < 1 || limit > 100) {
            return res.status(400).json({ success: false, code: 302, message: 'Invalid limit value' });
        }

        const validSortFields = ['createdAt', 'updatedAt', 'username']; // Define valid sort fields
        const validOrders = ['asc', 'desc']; // Define valid sort orders

        if (!validSortFields.includes(sort) || !validOrders.includes(order)) {
            return res.status(400).json({ success: false, code: 303, message: 'Invalid sort or order parameters' });
        }

        // Calculate skip
        const skip = (page - 1) * limit;

        // Fetch users from database excluding the password field
        const users = await User.find({}, '-password')
            .sort({ [sort]: order })
            .skip(skip)
            .limit(limit);

        const totalUsers = await User.countDocuments();

        if (!users.length) {
            return res.status(404).json({ success: false, code: 304, message: 'No users found' });
        }

        res.status(200).json({ success: true, users: users, code: 501, totalUsers: totalUsers });

    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ success: false, code: 305, message: 'Error fetching users', error: error.message });
    }
});

/**
 * @swagger
 * /mod/update-user/{userId}:
 *   put:
 *     summary: Update user account
 *     tags:
 *       - Moderator
 *     security: 
 *        - BearerAuth: []
 *     parameters: [
 *         {
 *           in: 'path',
 *           name: 'userId',
 *           required: true,
 *           schema: {
 *             type: 'string',
 *           },
 *           description: 'The ID of the user to update',
 *         },
 *       ]
 *     requestBody:
 *       required: true
 *       content:
 *           schema:
 *             $ref: '#/components/schemas/Update_account_mod'
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
router.put('/update-user/:userId', uploadMiddleware.single('file'), hasPermission('mod_update_users'), async (req, res) => {
    try {
        const { userId } = req.params; // Get userId from the route params
        let { name, email, password, permissions } = req.body;
        // email = email.toLowerCase();

        // Find the user by ID
        const userToUpdate = await User.findById(userId);

        if (!userToUpdate) {
            return res.status(404).json({ success: false, code: 310, message: 'User not found' });
        }

        // Update user details
        if (name) {
            userToUpdate.name = name;
        }

        if (email && email !== userToUpdate.email) {
            // Check if the email already exists in the database
            const existingUser = await User.findOne({ email: email });

            if (existingUser) {
                return res.status(400).json({ success: false, code: 311, message: 'Email is already taken by another user' });
            }

            userToUpdate.email = email;
        }

        if (password) {
            if (!isValidPassword(password)) {
                return res.status(400).json({ success: false, code: 312, message: 'Password must be at least ' + process.env.MIN_PASSWORD + ' or more characters' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            userToUpdate.password = hashedPassword;
        }

        if (permissions.length === 0) {
            return res.status(400).json({ success: false, code: 313, message: 'At least one permission has to be assigned for the user' });
        } else {
            userToUpdate.permissions = permissions
        }

        // Check if profile_picture is uploaded
        if (req.file) {
            // If user already has a profile picture, delete it
            if (userToUpdate.profile_picture) {
                // Construct the file path
                const filePath = path.join(__dirname, '..', userToUpdate.profile_picture);

                // Check if the file exists, then delete it
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath);
                }
            }

            // Save the new profile picture path
            userToUpdate.profile_picture = `/${main_upload_folder}/${profile_pictures_upload_folder}/` + req.file.filename;
        }

        const permissionsArray = permissions.split(',');
        userToUpdate.permissions = permissionsArray
        await userToUpdate.save();
        const { password: _, ...userWithoutPassword } = userToUpdate.toObject();

        res.status(200).json({
            success: true,
            code: 505,
            user: userWithoutPassword,
        });
    } catch (error) {
        res.status(400).json({ success: false, code: 307, message: 'Error updating user details', error: error.message });
    }
});

/**
 * @swagger
 * /mod/create-user:
 *   post:
 *     summary: Create a new user
 *     tags:
 *       - Moderator
 *     security: 
 *        [{ BearerAuth: []}]
 *     requestBody:
 *       required: true
 *       content:
 *           schema:
 *             $ref: '#/components/schemas/Create_account_mod'
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
router.post('/create-user', uploadMiddleware.single('file'), hasPermission('mod_create_users'), async (req, res) => {
    try {
        let { name, password, email, permissions } = req.body;
        // email = email.toLowerCase();

        console.log(name)
        // Validate entries
        if (!isValidEmail(email)) {
            return res.status(400).json({
                success: false,
                code: 320,
                message: 'Enter a valid email address'
            });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ success: false, code: 321, message: 'Email is already in use' });
        }

        if (!isValidPassword(password)) {
            return res.status(400).json({ success: false, code: 322, message: 'Password must be at least ' + process.env.MIN_PASSWORD + ' or more characters' });
        }

        if (permissions.length === 0) {
            return res.status(400).json({ success: false, code: 323, message: 'At least one permission has to be assigned for the user' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        let profilePicture = null;

        // Check if profile_picture is uploaded
        if (req.file) {
            profilePicture = `/${main_upload_folder}/${profile_pictures_upload_folder}/` + req.file.filename;
        }
        const permissionsArray = permissions.split(',');
        const user = new User({
            name,
            password: hashedPassword,
            email,
            profile_picture: profilePicture,
            permissions: permissionsArray
        });

        await user.save();
        res.status(200).json({ success: true, code: 506, message: 'User Created successfully', user: user });

    } catch (error) {
        res.status(400).json({ success: false, code: 329, message: 'Error registering user', error: error.message });
    }
});


/**
 * @swagger
 * /mod/ban-user/{userId}:
 *   put:
 *     summary: Ban or unban a user
 *     tags:
 *       - Moderator
 *     security: 
 *        [{ BearerAuth: []}]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Ban_unban_user'
 *     parameters: [
 *         {
 *           in: 'path',
 *           name: 'userId',
 *           required: true,
 *           schema: {
 *             type: 'string',
 *           },
 *           description: 'The ID of the user to ban/unban',
 *         },
 *     ]
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

router.put('/ban-user/:userId', hasPermission('mod_ban_users'), async (req, res) => {
    try {
        const { userId } = req.params; // Get userId from the route params

        // Find the user by ID
        const userToUpdate = await User.findById(userId);

        if (!userToUpdate) {
            return res.status(404).json({ success: false, code: 330, message: 'User not found' });
        }

        // Update user details
        if (userToUpdate.active) {
            userToUpdate.active = false;
        } else {
            userToUpdate.active = true
        }

        await userToUpdate.save();
        const { password: _, ...userWithoutPassword } = userToUpdate.toObject();

        res.status(200).json({
            success: true,
            code: 30,
            user: userWithoutPassword,
        });

    } catch (error) {
        res.status(400).json({ success: false, code: 339, message: 'Error updating user details', error: error.message });
    }
});


/**
 * @swagger
 * /mod/delete-user/{userId}:
 *   delete:
 *     summary: Delete User in moderation 
 *     tags:
 *       - Moderator
 *     security: 
 *        [{ BearerAuth: []}]
 *     requestBody:
 *       required: true
 *       content:
 *           schema:
 *             $ref: '#/components/schemas/Delete_user'
 *     parameters: [
 *         {
 *           in: 'path',
 *           name: 'userId',
 *           required: true,
 *           schema: {
 *             type: 'string',
 *           },
 *           description: 'The ID of the user to ban/unban',
 *         },
 *     ]
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

router.delete('/delete-user/:userId', hasPermission('mod_delete_users'), async (req, res) => {
    try {
        const { userId } = req.params;

        // Retrieve the user from the database
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, code: 340, message: 'User not found' });
        }

        // Check if the user has a photo
        if (user.profile_picture) {

            // Construct the file path
            const filePath = path.join(__dirname, '..', user.profile_picture);
            // Check if the file exists, then delete it
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
            }
        }
        // Proceed with the delete operation
        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(400).json({ success: false, code: 342, message: 'Something went wrong, try again later' });
        }


        res.status(200).json({
            success: true,
            code: 509,
            message: "User Deleted successfully !",
        });

    } catch (error) {
        res.status(400).json({ success: false, code: 344, message: 'Error deleting user ', error: error.message });
    }
});

module.exports = router;
