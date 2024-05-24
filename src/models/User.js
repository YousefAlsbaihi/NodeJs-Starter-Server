const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false, trim: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    profile_picture: { type: String, required: false, unique: false },
    active: { type: Boolean, default: true },
    permissions: [{
        type: String,
        required: false
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Middleware to update updatedAt field
userSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});


const User = mongoose.model('User', userSchema);

module.exports = User;
