
// register.js - JavaScript file

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../models/user');

module.exports = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);

    try {
        const user = new User({ username, password: hashedPassword });
        await user.save();
        const token = jwt.sign({ id: user._id }, config.secretKey, { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    } catch (err) {
        res.status(500).send('There was a problem registering the user.');
    }
};
