const Joi = require('joi');
const jwt = require('jsonwebtoken');
const services = require('../services');

const { JWT_SECRET } = process.env;
const { User } = require('../models');

const validateBody = () => {
    const schema = Joi.object({
        displayName: Joi.string().min(8).required().messages({
            'string.min': '"displayName" length must be at least 8 characters long',
            'string.required': '"displayName" length must be at least 8 characters long',
        }),
        email: Joi.string().email({ tlds: { allow: false } }).required().messages({
            'string.required': '"email" must be a valid email',
        }),
        password: Joi.string().min(6).required().messages({
            'string.min': '"password" length must be at least 6 characters long',
            'string.required': '"password" length must be at least 6 characters long',
        }),
        image: Joi.string(),
    });

    return schema;
};

const userPost = async (req, res) => {
    const { error } = validateBody().validate(req.body);
    const { email } = req.body;
    const userRegistered = await User.findOne({ where: { email } });

    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    if (userRegistered) {
        return res.status(409).json({ message: 'User already registered' });
    }
    const payload = { email, admin: false,
    };
    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
    });

    await User.create(req.body);
    return res.status(201).json({ token });
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    const result = await services.userServices.userGetById(id);

    if (!result) {
        return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(result);
};

const getAllUsers = async (_req, res) => {
    const result = await services.userServices.userGetAll();

    return res.status(200).json(result);
};

module.exports = {
    userPost,
    getUserById,
    getAllUsers,
};