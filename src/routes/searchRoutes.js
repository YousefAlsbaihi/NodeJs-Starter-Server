const express = require('express');
const User = require('../models/User');
const hasPermission = require('../utils/hasPermission');

require('dotenv').config();
const router = express.Router();


router.get('/q', hasPermission('search_users'), async (req, res) => {

    try {
        // Construct query object to filter users based on query parameters
        const query = {};

        // Exclude password field
        const projection = { password: 0 };

        const currentUser = req.user;
        let allowedFields = null;
        if (currentUser.permissions.includes("mod_search")) {
            allowedFields = process.env.MOD_SEARCH_FIELDS.split(',');
        } else {
            allowedFields = process.env.USERS_SEARCH_FIELDS.split(',');
        }
        console.log(allowedFields)
        // Check if query parameters are provided and construct query accordingly
        if (req.query.name) {
            if (allowedFields.includes("name")) {
                query.name = req.query.name;

            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Name field' });
            }

        }

        if (req.query.email) {
            if (allowedFields.includes("email")) {
                let email = req.query.email
                query.email = email;
            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Email field' });
            }
        }

        if (req.query.active) {
            if (allowedFields.includes("active")) {
                query.active = req.query.active === 'true'; // Convert string to boolean
            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Active field' });
            }
        }

        if (req.query.hasProfilePicture === 'true') {
            if (allowedFields.includes("profilePicture")) {
                query.profile_picture = { $ne: null };
            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Profile Picture field' });
            }
        } else if (req.query.hasProfilePicture === 'false') {
            if (allowedFields.includes("profilePicture")) {
                query.profile_picture = null;
            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Profile Picture field' });
            }
        }

        if (req.query.permissions) {
            if (allowedFields.includes("permission")) {
                // If permissions are provided as a string, convert it to an array
                const permissions = Array.isArray(req.query.permissions) ? req.query.permissions : [req.query.permissions];
                query.permissions = { $all: permissions };
            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Permissions field' });
            }
        }
        if (req.query.createdAtMin) {
            if (allowedFields.includes("createdAtMin")) {
                query.createdAt = { $gte: new Date(req.query.createdAtMin) };
            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Created At Minimum field' });
            }

        }
        if (req.query.createdAtMax) {
            if (allowedFields.includes("createdAtMax")) {
                query.createdAt = {
                    ...query.createdAt,
                    $lte: new Date(req.query.createdAtMax),
                };
            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Created At Max field' });
            }
        }

        if (req.query.updatedAtMin) {
            if (allowedFields.includes("updatedAtMin")) {
                query.updatedAt = { $gte: new Date(req.query.updatedAtMin) };
            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Updated At Minimum field' });
            }

        }
        if (req.query.updatedAtMax) {
            if (allowedFields.includes("updatedAtMax")) {
                query.updatedAt = {
                    ...query.updatedAt,
                    $lte: new Date(req.query.updatedAtMax),
                };
            } else {
                return res.status(403).json({ success: false, code: 409, message: 'Cannot search with Updated At Max field' });
            }
        }
        // Add more conditions for filtering as needed

        // Execute the query
        const users = await User.find(query, projection);

        res.status(200).json({
            success: true,
            code: 511,
            user: users,
        });

    } catch (error) {
        console.error(error);
        res.status(400).json({ success: false, code: 410, message: 'Error Searching for users: ', error: error.message });
    }
});



module.exports = router;
