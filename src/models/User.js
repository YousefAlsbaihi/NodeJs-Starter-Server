const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: false },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profile_picture: { type: String, required: false, unique: false }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
