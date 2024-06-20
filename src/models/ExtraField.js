const mongoose = require('mongoose');
const { Schema } = mongoose

const extraFieldSchema = new mongoose.Schema({
    relatedId: { type: mongoose.Schema.Types.ObjectId, required: true },  // ID of the related document
    collectionName: { type: String, required: true },  // Name of the related collection
    key: { type: String, required: true },  // Key of the extra field
    value: { type: Schema.Types.Mixed, required: true },  // Value of the extra field
    createdAt: { type: Date, default: Date.now },  // Timestamp of creation
    updatedAt: { type: Date, default: Date.now }   // Timestamp of the last update
});

extraFieldSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const ExtraField = mongoose.model('ExtraField', extraFieldSchema);

module.exports = ExtraField;
