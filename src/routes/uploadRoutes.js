const express = require('express');
const fs = require('fs');
const mime = require('mime-types');


const main_upload_folder = process.env.MAIN_UPLOAD_FOLDER
const files_upload_folder = process.env.FILES_UPLOAD_FOLDER
const files_per_upload = parseInt(process.env.FILES_PER_UPLOAD)

const { createStorage, createUploadMiddleware } = require('../utils/multerSetup');
const encrypt = require('../utils/encryptFile');
const decrypt = require('../utils/decryptFile');
const hasPermission = require('../utils/hasPermission');
const File = require('../models/File');
const { formatFileSize } = require('../utils/utils');
const storage = createStorage(`src/${main_upload_folder}/${files_upload_folder}`);
const uploadMiddleware = createUploadMiddleware(storage);


const router = express.Router()

// Upload Files
router.post('/upload', hasPermission("upload_files"), uploadMiddleware.array('files'), async (req, res) => {
    try {
        const files = req.files;
        if (!files || files.length === 0) {
            return res.status(400).json({ success: false, code: 6104, message: 'Select files to upload.' });
        }

        if (files.length > files_per_upload) {
            return res.status(400).json({ success: false, code: 6102, message: `Too many files, only ${files_per_upload} files allowed per upload` });
        }
        const user = req.user
        // Loop through each file and encrypt it
        let fileMetadata = [];
        const fileSavePromises = files.map(async (file) => {
            const encryptedData = encrypt(fs.readFileSync(file.path));
            fs.writeFileSync(file.path, encryptedData);

            const newFile = new File({
                originalName: file.originalname,
                filename: file.filename,
                path: file.path,
                size: file.size,
                mimetype: file.mimetype,
                uploadedBy: user._id
            });

            await newFile.save();


            fileMetadata.push({
                id: newFile._id,
                name: newFile.originalName,
                type: newFile.mimetype || "N/A",
                readableSize: formatFileSize(newFile.size),
                size: newFile.size,
                uploadedBy: newFile.uploadedBy,
                createdAt: newFile.createdAt,
                updatedAt: newFile.updatedAt,
                uri: `/files/download/${newFile._id}`
            });


            return newFile;
        });

        await Promise.all(fileSavePromises);

        return res.status(200).json({ success: true, code: 6001, message: 'Files uploaded and encrypted successfully', files: fileMetadata });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, code: 6101, message: 'Something went wrong uploading files' });
    }

});



// File download route
router.get('/get', hasPermission("get_files"), async (req, res) => {
    try {
        const fileIds = req.query.ids ? req.query.ids.split(',') : [];
        const uploadedBy = req.query.uploadedBy;

        let query = {};

        if (fileIds.length > 0) {
            query._id = { $in: fileIds };
        } else if (uploadedBy) {
            query.uploadedBy = uploadedBy;
        } else {
            return res.status(400).json({ success: false, code: 6002, message: 'No file IDs or uploadedBy provided' });
        }

        // Find the file documents in the database based on the query
        const files = await File.find(query);
        if (files.length === 0) {
            return res.status(404).json({ success: false, code: 6003, message: 'No files found' });
        }

        // Create metadata for each file
        const filesMetadata = files.map(file => ({
            id: file._id,
            name: file.originalName,
            type: file.mimetype || "N/A",
            readableSize: formatFileSize(file.size),
            size: file.size,
            uploadedBy: file.uploadedBy,
            createdAt: file.createdAt,
            updatedAt: file.updatedAt,
            uri: `/files/download/${file._id}`
        }));

        return res.status(200).json({ success: true, code: 6004, message: 'Files retrieved successfully!', files: filesMetadata });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, code: 6101, message: 'Something went wrong retrieving the files' });
    }
});


// File download route
router.get('/download/:id', async (req, res) => {
    try {
        const fileId = req.params.id;
        const { download = 'true' } = req.query; // Default to true if download query param is not provided

        // Find the file document in the database by ID
        const file = await File.findById(fileId);
        if (!file) {
            return res.status(404).json({ success: false, code: 6003, message: 'File not found' });
        }

        const filePath = file.path;

        // Decrypt the file
        const decryptedData = await decrypt(fs.readFileSync(filePath));
        if (!decryptedData.success) {
            console.log(decryptedData.message);
            return res.status(403).json({ success: false, code: 6002, message: 'Error decrypting the file' });
        }

        // Serve the decrypted file content
        const mimeType = mime.lookup(file.filename) || 'application/octet-stream';
        const originalFileName = encodeURIComponent(file.originalName); // Encode to handle special characters

        // Set the Content-Disposition header based on the query parameter
        const contentDisposition = download === 'false' ? 'inline' : 'attachment';
        res.setHeader('Content-Disposition', `${contentDisposition}; filename="${originalFileName}"`);
        res.setHeader('Content-Type', mimeType);
        res.send(decryptedData.buffer);

    } catch (err) {
        console.error(err);
        return res.status(500).json({ success: false, code: 6101, message: 'Something went wrong downloading the file' });
    }
});


module.exports = router


