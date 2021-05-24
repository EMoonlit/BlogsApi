const { Router } = require('express');
const { UsersController } = require('../controllers');
const middleWare = require('../middlewares');

const userRoute = Router();

userRoute
  .get('/:id', middleWare.authMiddleware, UsersController.getUsersById)
  .get('/', middleWare.authMiddleware, UsersController.getUsers)
  .post('/', UsersController.createUser)
  .put('/:id', UsersController.updateUser)
  .delete('/em', UsersController.deleteUser);

module.exports = userRoute;