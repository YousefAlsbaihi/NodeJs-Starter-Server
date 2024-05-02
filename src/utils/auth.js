const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs'); // Import bcrypt library
require('dotenv').config();
const secretKey = process.env.JWT_SECRET; // Replace with your secret key
const tokenLife = process.env.TOKEN_LIFE; // Replace with your secret key



const generateToken = (user) => {
    return jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: tokenLife });
};

const verifyToken = (token) => {
    try {
        return jwt.verify(token, secretKey);
    } catch (error) {
        return null;
    }
};

const comparePasswords = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};


const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

const isValidPassword = (password) => {
    return password.length >= process.env.MIN_PASSWORD;
};

module.exports = {
    generateToken,
    verifyToken,
    comparePasswords,
    isValidEmail,
    isValidPassword
};
