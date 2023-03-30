const { login } = require('./login');
const userController = require('./userController');
const categoriesController = require('./categoriesController');
const postsController = require('./postsController');

module.exports = {
    login,
    userController,
    categoriesController,
    postsController,
};