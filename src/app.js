const express = require('express');
const controllers = require('./controllers');
const validateJWT = require('./middleware/validateJWT');

// ...

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.post('/login', controllers.login);
app.post('/user', controllers.userController.userPost);
app.get('/user/:id', validateJWT, controllers.userController.getUserById);
app.get('/user', validateJWT, controllers.userController.getAllUsers);
app.delete('/user/me', validateJWT, controllers.postsController.deleteUser);
app.post('/categories', validateJWT, controllers.categoriesController.addCategory);
app.get('/categories', validateJWT, controllers.categoriesController.getCategories);
app.post('/post', validateJWT, controllers.postsController.addPost);
app.get('/post/search', validateJWT, controllers.postsController.getPostByQuery);
app.get('/post/:id', validateJWT, controllers.postsController.getPostInfo);
app.get('/post', validateJWT, controllers.postsController.getAllPostInfo);
app.put('/post/:id', validateJWT, controllers.postsController.updatePostController);
app.delete('/post/:id', validateJWT, controllers.postsController.deletePost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
