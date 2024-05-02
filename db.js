const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.DATABASE;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch((error) => {
        console.error('Connection error:', error);
    });

module.exports = mongoose;




