// middleware/extraFieldsMiddleware.js
const ExtraField = require('../models/ExtraField');
require('dotenv').config();
var envAllowedCollections = process.env.ALLOWED_COLLECTIONS

function extraFieldsMiddleware(collection) {
    return async (req, res, next) => {
        try {



            let relatedId = req.body._id || req.body.id; // Try to get the ID from the request body

            // Remove the part that defaults to req.user ID if relatedId is not available
            // We will defer handling extra fields if relatedId is not immediately available

            console.log(`extraFieldsMiddleware - Initial Related ID: ${relatedId}`); // Debugging log

            // Reserved fields that should not be treated as extra fields
            const reservedFields = ['_id', 'createdAt', 'updatedAt'];

            // Default fields from environment variable
            const defaultFields = process.env[`DEFAULT_${collection.toUpperCase()}_FIELDS`]
                ? process.env[`DEFAULT_${collection.toUpperCase()}_FIELDS`].split(',').map(field => field.trim())
                : [];

            console.log(`extraFieldsMiddleware - Default fields: ${defaultFields}`); // Debugging log

            // Combine reserved and default fields
            const nonExtraFields = new Set([...reservedFields, ...defaultFields]);

            // Identify extra fields that are not in the non-extra fields list
            const extraFields = Object.keys(req.body).filter(key => !nonExtraFields.has(key));

            console.log(`extraFieldsMiddleware - Extra fields to process: ${extraFields}`); // Debugging log
            const allowedCollections = envAllowedCollections.split(',').map(collections => collections.trim());
            if (extraFields.length > 0 && allowedCollections.includes(collection)) {
                // Add extra fields since it's allowed collection in the .env file 
                // Function to handle adding or updating extra fields
                async function handleExtraFields(relatedId) {
                    for (const key of extraFields) {
                        const value = req.body[key];

                        try {
                            // Check if the extra field already exists
                            const existingField = await ExtraField.findOne({ collectionName: collection, relatedId, key });

                            if (existingField) {
                                // If the field exists, update it
                                existingField.value = value;
                                await existingField.save();
                                console.log(`Updated extra field '${key}' for collection '${collection}' with value '${value}'.`);
                            } else {
                                // If the field does not exist, add it
                                const newField = new ExtraField({
                                    collectionName: collection,
                                    relatedId,
                                    key,
                                    value
                                });
                                await newField.save();
                                console.log(`Added new extra field '${key}' for collection '${collection}' with value '${value}'.`);
                            }
                        } catch (error) {
                            console.error(`Error handling extra field '${key}' for collection '${collection}':`, error.message);
                        }
                    }
                }

                if (relatedId) {
                    // If the related ID is already available, handle extra fields immediately
                    await handleExtraFields(relatedId);
                } else {
                    // If related ID is not available (e.g., during registration or file creation), defer handling to after saving
                    req.handleExtraFields = handleExtraFields; // Attach the function to the request object
                }
            }

            next(); // Move to the next middleware
        } catch (error) {
            console.error(`Error in extraFieldsMiddleware: ${error.message}`);
            res.status(500).json({ success: false, message: 'Error processing extra fields', error: error.message });
        }
    };
}

module.exports = extraFieldsMiddleware;
