const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    originalName: { type: String, required: true },
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: String, required: true },
    mimetype: { type: String },
    createdAt: { type: Date, default: Date.now },
    uploadedBy: { type: String },
}, { timestamps: true });

const File = mongoose.model('File', fileSchema);

module.exports = File;
