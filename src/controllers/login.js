const Joi = require('joi');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;
const { User } = require('../models');

const validateBody = (body) => Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
}).validate(body);

const login = async (req, res) => {
    const { email, password } = req.body;
    const { error } = validateBody(req.body);
    const user = await User.findOne({ where: { email, password } });

    if (error) return res.status(400).json({ message: 'Some required fields are missing' });

    if (!user) return res.status(400).json({ message: 'Invalid fields' });

    const payload = {
        email: user.email,
        admin: false,
    };

    const token = jwt.sign(payload, JWT_SECRET, {
        expiresIn: '1h',
    });

    res.status(200).json({ token });
};
module.exports = {
    login,
};