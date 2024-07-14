
// api.js - JavaScript file

const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { encryptData, decryptData } = require('./encryption');
const { validateRequest, validateResponse } = require('./validation');
const routes = require('./routes');

const app = express();

// Middleware setup
app.use(helmet());
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Load environment variables from .env file
require('dotenv').config();

// Set up routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
