
// validation.js - JavaScript file

const Joi = require('joi');

function validateRequest(req, res, next) {
    const schema = Joi.object({
        // Define the schema for request validation
        data: Joi.string().required()
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
}

function validateResponse(resData) {
    const schema = Joi.object({
        // Define the schema for response validation
        data: Joi.string().required()
    });

    const { error } = schema.validate(resData);
    if (error) {
        throw new Error(error.details[0].message);
    }
}

module.exports = {
    validateRequest,
    validateResponse
};
