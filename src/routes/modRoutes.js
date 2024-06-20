const express = require('express');
const User = require('../models/User');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const hasPermission = require('../middleware/hasPermission');
const mongoose = require('../db');

require('dotenv').config();
const main_upload_folder = process.env.MAIN_UPLOAD_FOLDER
const profile_pictures_upload_folder = process.env.PROFILE_PICTURES_UPLOAD_FOLDER
const files_upload_folder = process.env.FILES_UPLOAD_FOLDER


const { createStorage, createUploadMiddleware } = require('../middleware/multerSetup');
const storage = createStorage(`src/${main_upload_folder}/${profile_pictures_upload_folder}`);
const uploadMiddleware = createUploadMiddleware(storage);

const tempStorage = createStorage(`src/${main_upload_folder}/temp`);
const uploadTempMiddleware = createUploadMiddleware(tempStorage);


const router = express.Router();
const { isValidEmail, isValidPassword } = require('../utils/auth');
const File = require('../models/File');
const { formatFileSize, convertToObjectId } = require('../utils/utils');
const encrypt = require('../utils/encryptFile');
const decrypt = require('../utils/decryptFile');



// Users
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



// Files
router.get('/files', hasPermission('mod_all_files'), async (req, res) => {
    try {
        let { page = 1, limit = process.env.MOD_PER_PAGE_FILES, sort = 'createdAt', order = 'desc' } = req.query;

        // Validate and parse query parameters
        page = parseInt(page);
        limit = parseInt(limit);

        if (isNaN(page) || page < 1) {
            return res.status(400).json({ success: false, code: 301, message: 'Invalid page number' });
        }

        if (isNaN(limit) || limit < 1 || limit > 100) {
            return res.status(400).json({ success: false, code: 302, message: 'Invalid limit value' });
        }

        const validSortFields = ['createdAt', 'updatedAt', 'mimetype', 'uploadedBy']; // Define valid sort fields
        const validOrders = ['asc', 'desc']; // Define valid sort orders

        if (!validSortFields.includes(sort) || !validOrders.includes(order)) {
            return res.status(400).json({ success: false, code: 303, message: 'Invalid sort or order parameters' });
        }

        // Calculate skip
        const skip = (page - 1) * limit;

        // Fetch files from database
        const files = await File.find({})
            .sort({ [sort]: order })
            .skip(skip)
            .limit(limit);

        const totalFiles = await File.countDocuments();

        if (!files.length) {
            return res.status(404).json({ success: false, code: 304, message: 'No Files found' });
        }

        const fullFilesDetails = files.map(file => ({
            ...file.toObject(),
            readableSize: formatFileSize(file.size),
            uri: `/files/download/${file._id}`
        }));


        res.status(200).json({ success: true, files: fullFilesDetails, code: 501, totalFiles: totalFiles });

    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).json({ success: false, code: 305, message: 'Error fetching files', error: error.message });
    }
});

router.delete('/delete-file/:id', hasPermission('mod_delete_file'), async (req, res) => {
    try {
        const { id } = req.params;

        // Validate file ID
        if (!id) {
            return res.status(400).json({ success: false, code: 401, message: 'File ID is required' });
        }

        // Find the file by ID
        const file = await File.findById(id);

        if (!file) {
            return res.status(404).json({ success: false, code: 402, message: 'File not found' });
        }

        // Construct the file path
        const filePath = path.join(__dirname, '..', main_upload_folder, files_upload_folder, file.filename);



        if (fs.existsSync(filePath)) {
            // If the file exists, delete it from the file system
            fs.unlink(filePath, async (err) => {
                if (err) {
                    console.error('Error deleting file from file system:', err);
                    return res.status(500).json({ success: false, code: 404, message: 'Error deleting file from the server' });
                }

                // Delete the file entry from the database
                await File.findByIdAndDelete(id);

                // Return success response
                res.status(200).json({ success: true, code: 503, message: 'File deleted successfully' });
            });
        } else {
            // If the file does not exist in the file system, just delete the database entry
            await File.findByIdAndDelete(id);

            // Return success response
            res.status(200).json({ success: true, code: 504, message: 'File entry deleted successfully, but file not found in file system' });
        }

    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({ success: false, code: 403, message: 'Error deleting file', error: error.message });
    }
});



// Backup database

router.get('/backup', hasPermission('mod_backup'), async (req, res) => {
    try {
        const db = mongoose.connection.db;
        const collections = await db.listCollections().toArray();
        const backupData = {};

        for (let collection of collections) {
            const collectionName = collection.name;
            const collectionData = await db.collection(collectionName).find({}).toArray();
            backupData[collectionName] = collectionData;
        }

        const backupFileName = `backup-${Date.now()}.json`;
        const backupFilePath = path.join(__dirname, backupFileName);
        const jsonBackup = JSON.stringify(backupData, null, 2);

        // Encrypt the backup data
        const encryptedBackup = encrypt(Buffer.from(jsonBackup));

        fs.writeFileSync(backupFilePath, encryptedBackup);

        res.download(backupFilePath, backupFileName, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error downloading the backup file');
            }
            // Optionally, delete the file after download
            fs.unlinkSync(backupFilePath);
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Backup failed');
    }
});


router.post('/restore', uploadTempMiddleware.single('restore'), hasPermission('mod_restore'), async (req, res) => {

    try {
        const backupFilePath = req.file.path;
        const encryptedBackupData = fs.readFileSync(backupFilePath);

        // Decrypt the backup data
        const decryptionResult = await decrypt(encryptedBackupData);
        if (!decryptionResult.success) {
            return res.status(500).send(decryptionResult.message);
        }

        const backupData = JSON.parse(decryptionResult.buffer.toString());
        const db = mongoose.connection.db;

        // Sequentially restore each collection
        for (const collectionName of Object.keys(backupData)) {
            try {
                // Drop the collection if it exists
                await db.collection(collectionName).drop().catch((err) => {
                    if (err.code !== 26) throw err; // Ignore "namespace not found" errors
                });

                await db.createCollection(collectionName);

                const collectionData = backupData[collectionName].map(convertToObjectId);
                if (collectionData.length > 0) {
                    await db.collection(collectionName).insertMany(collectionData);
                }

                console.log(`Restored collection: ${collectionName}`);
            } catch (err) {
                console.error(`Failed to restore collection: ${collectionName}`, err);
                return res.status(500).send(`Restore failed for collection: ${collectionName}`);
            }
        }

        // Clean up the uploaded file
        fs.unlinkSync(backupFilePath);
        res.send('Database restored successfully');
    } catch (error) {
        console.error('Restore error:', error);
        res.status(500).send('Restore failed');
    }

});

module.exports = router;
