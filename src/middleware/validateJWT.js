const jwt = require('jsonwebtoken');

require('dotenv/config');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        /*
            A variável decoded será um objeto equivalente ao seguinte:
            {
                data: {
                userId: 1
                },
                iat: 1656616422,
                exp: 1657221222
            }
        */

        const user = await User.findOne({ where: { email: decoded.email } });

        if (!user) {
            return res.status(401).json({ message: 'Expired or invalid token' });
        }

        req.user = user;

        next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};