const express = require('express');
const mongoose = require('./db');
const authRoutes = require('./routes/authRoutes');
const path = require('path');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('../swaggerOptions');


const app = express();
const PORT = 3000;

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/uploads/profile_pictures', express.static(path.join(__dirname, 'uploads', 'profile_pictures')));
app.use(express.json());
app.use('/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
