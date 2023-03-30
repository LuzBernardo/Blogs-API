const { User } = require('../models');

const userGetAll = async () => {
    const allUsers = await User.findAll({
        attributes: {
            exclude: ['password'], // Exclude the password attribute from the result set
        },
    });

    return allUsers;
};

const userGetById = async (id) => {
    const user = await User.findOne({
        attributes: {
            exclude: ['password'], // Exclude the password attribute from the result set
        },
        where: { id },
    });

    return user;
};

module.exports = {
    userGetAll,
    userGetById,
};