
// login.js - JavaScript file

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../config');
const User = require('../models/user');

module.exports = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send('No user found.');

        const passwordIsValid = bcrypt.compareSync(password, user.password);
        if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });

        const token = jwt.sign({ id: user._id }, config.secretKey, { expiresIn: 86400 });
        res.status(200).send({ auth: true, token });
    } catch (err) {
        res.status(500).send('Error on the server.');
    }
};
