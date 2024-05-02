const express = require('express');
const mongoose = require('./db');
const authRoutes = require('./routes/authRoutes');
const modRoutes = require('./routes/modRoutes');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('../swaggerOptions');


const app = express();
const PORT = 3000;
const corsOptions = {
    origin: 'http://localhost:3001',
    methods: 'GET,POST,PUT',
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));



app.use('/uploads/profile_pictures', express.static(path.join(__dirname, 'uploads', 'profile_pictures')));


app.use(bodyParser.json()); // Parse JSON data

// Optionally, parse urlencoded data (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/mod', modRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
