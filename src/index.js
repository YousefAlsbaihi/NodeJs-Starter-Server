const express = require('express');
const mongoose = require('./db');
const authRoutes = require('./routes/authRoutes');
const modRoutes = require('./routes/modRoutes');
const searchRoutes = require('./routes/searchRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

const main_upload_folder = process.env.MAIN_UPLOAD_FOLDER
const profile_pictures_upload_folder = process.env.PROFILE_PICTURES_UPLOAD_FOLDER

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = process.env.ALLOWED_ORIGINS.split(',');
const corsOptions = {
    origin: allowedOrigins,
    methods: 'GET,POST,PUT,DELETE',
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(`/${main_upload_folder}/${profile_pictures_upload_folder}`, express.static(path.join(__dirname, main_upload_folder, profile_pictures_upload_folder)));

app.use(bodyParser.json()); // Parse JSON data

// Optionally, parse urlencoded data (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/mod', modRoutes);
app.use('/search', searchRoutes);
app.use('/files', uploadRoutes);


app.listen(PORT, () => {
    console.warn('\x1b[32m%s\x1b[0m', `\nServer is running on port ${PORT}`);
    console.warn('\x1b[32m%s\x1b[0m', `\nAllowed CORS origins: [${allowedOrigins}]`)
    console.warn('\x1b[32m%s\x1b[0m', `\nAllowed CORS methods: [${corsOptions.methods}]`)
    console.warn('\x1b[32m%s\x1b[0m', `\nMain Upload directory: ${main_upload_folder}`)
    console.info('\x1b[32m%s\x1b[0m', `\nToken lifetime : ${process.env.TOKEN_LIFE}`)
});
