const mongoose = require('mongoose');
const ExtraField = require('../models/ExtraField');
const User = require('../models/User');
require('dotenv').config();
var envAllowedCollections = process.env.ALLOWED_COLLECTIONS

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


async function getDocumentExtraFields(collectionName, document) {
    try {
        let relatedId = document._id;

        // Fetch extra fields for the document
        const extraFields = await ExtraField.find({ collectionName, relatedId });

        // Convert extra fields array to an object for easier merging
        const extraFieldsObject = extraFields.reduce((acc, field) => {
            acc[field.key] = field.value;
            return acc;
        }, {});

        // Extract the document data, excluding Mongoose metadata
        const documentData = document.toObject ? document.toObject() : document;

        // Merge extra fields with the main document details
        const documentWithExtraFields = { ...documentData, ...extraFieldsObject };

        return documentWithExtraFields;
    } catch (error) {
        console.error(`Error fetching extra fields for ${collectionName} with ID ${relatedId}:`, error);
        throw new Error('Error fetching extra fields');
    }
}

const getUserDetailsById = async (userId) => {
    // Replace with your actual logic to fetch user details
    const theUser = await User.findById(userId).select('-permissions -password');;

    const documentWithExtraFields = await getDocumentExtraFields('User', theUser);

    return documentWithExtraFields
};


module.exports = { formatFileSize, convertToObjectId, getDocumentExtraFields, getUserDetailsById };
