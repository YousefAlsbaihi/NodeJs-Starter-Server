const mongoose = require('mongoose');

// File size format
const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Utility to convert _id and any other specified fields back to ObjectId
function convertToObjectId(document) {
    if (document._id && typeof document._id === 'string') {
        document._id = mongoose.Types.ObjectId.createFromHexString(document._id)
    }
    // Add other fields that need conversion here if necessary
    return document;
}


module.exports = { formatFileSize, convertToObjectId };
