
// me.js - JavaScript file

const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');

module.exports = async (req, res) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });

    jwt.verify(token, config.secretKey, async (err, decoded) => {
        if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

        try {
            const user = await User.findById(decoded.id, { password: 0 });
            if (!user) return res.status(404).send('No user found.');
            res.status(200).send(user);
        } catch (err) {
            res.status(500).send('There was a problem finding the user.');
        }
    });
};
