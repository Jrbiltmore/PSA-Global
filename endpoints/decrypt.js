
// decrypt.js - JavaScript file

const { decryptData } = require('../encryption');
const { validateRequest, validateResponse } = require('../validation');

module.exports = (req, res) => {
    const { data } = req.body;
    const decryptedData = decryptData(data);
    validateResponse({ data: decryptedData });
    res.json({ data: decryptedData });
};
