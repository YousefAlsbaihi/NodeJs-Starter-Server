const mongoose = require('mongoose');
require('dotenv').config();

const MONGODB_URI = process.env.DATABASE;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('\x1b[32m%s\x1b[0m', '\nMongodb is connected');
    })
    .catch((error) => {
        console.error('Connection error:', error);
    });

module.exports = mongoose;




