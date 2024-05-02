const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { verifyToken } = require('./auth');

const hasPermission = (permission) => {
    return async (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1]; // Extract JWT token from Authorization header

        if (!token) {
            return res.status(401).json({ success: false, code: 898, message: 'No token provided' });
        }

        try {
            const decoded = verifyToken(token); // Verify and decode JWT token
            const user = await User.findById(decoded.id); // Find user by ID from decoded token

            if (!user) {
                return res.status(404).json({ success: false, code: 899, message: 'User not found' });
            }

            req.user = user; // Attach user object to the request
            req.userId = decoded.id; // Attach user ID to the request

            // Check if user has the required permission
            if (!user.permissions.includes(permission)) {
                return res.status(403).json({ success: false, code: 897, message: 'Forbidden, permission denied' });
            }

            next(); // Continue to the next middleware or route handler
        } catch (error) {
            return res.status(401).json({ success: false, code: 900, message: 'Invalid token' });
        }
    };
};

module.exports = hasPermission;
