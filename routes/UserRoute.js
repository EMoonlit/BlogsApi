const { Router } = require('express');
const { UsersController } = require('../controllers');

const userRoute = Router();

userRoute
  .get('/', UsersController.getUsers)
  .get('/:id', UsersController.getUsersById)
  .post('/', UsersController.createUser)
  .put('/:id', UsersController.updateUser)
  .delete('/em', UsersController.deleteUser);

module.exports = userRoute;