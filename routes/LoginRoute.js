const { Router } = require('express');
const { LoginController } = require('../controllers');

const loginRoute = Router();

loginRoute.post('/', LoginController.signIn);

module.exports = loginRoute;