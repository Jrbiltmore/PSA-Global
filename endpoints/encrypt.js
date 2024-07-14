
// encrypt.js - JavaScript file

const { encryptData } = require('../encryption');
const { validateRequest, validateResponse } = require('../validation');

module.exports = (req, res) => {
    const { data } = req.body;
    const encryptedData = encryptData(data);
    validateResponse({ data: encryptedData });
    res.json({ data: encryptedData });
};
