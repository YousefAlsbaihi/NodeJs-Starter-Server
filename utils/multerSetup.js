const multer = require('multer');

// Function to create Multer storage with specified destination
const createStorage = (destination) => {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, destination);
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname);
        }
    });
};

// Function to create Multer middleware with specified storage
const createUploadMiddleware = (storage) => {
    return multer({ storage: storage });
};

module.exports = { createStorage, createUploadMiddleware };
