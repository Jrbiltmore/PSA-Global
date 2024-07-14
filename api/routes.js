
// routes.js - JavaScript file

const express = require('express');
const { validateRequest, validateResponse } = require('./validation');
const { encryptData, decryptData } = require('./encryption');

const router = express.Router();

// Define routes
router.post('/encrypt', validateRequest, (req, res) => {
    const { data } = req.body;
    const encryptedData = encryptData(data);
    validateResponse({ data: encryptedData });
    res.json({ data: encryptedData });
});

router.post('/decrypt', validateRequest, (req, res) => {
    const { data } = req.body;
    const decryptedData = decryptData(data);
    validateResponse({ data: decryptedData });
    res.json({ data: decryptedData });
});

module.exports = router;
