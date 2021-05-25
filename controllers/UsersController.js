const { StatusCodes } = require('http-status-codes');
const clc = require('cli-color');
const { userService } = require('../services');

const getUsers = async (_req, res, next) => {
  try {
    const result = await userService.getUsers();
    if (result.isError) return next(result);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    console.log(clc.redBright(`ERRO getUsers controller: ${err.message}`));
    next(err);
  }
};

const getUsersById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await userService.getUsersById(id);
    if (result.isError) return next(result);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    console.log(clc.redBright(`ERRO getUsers controller: ${err.message}`));
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await userService.createUser(data);
    return res.status(StatusCodes.CREATED).json({ token: result });
  } catch (err) {
   console.log(clc.redBright(err.message));
   next(err);
  }
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = { userI: id, userName: name };
  return res.status(StatusCodes.OK).json({ message: result });
};

const deleteUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const result = await userService.deleteUser(userId);
    console.log(result);
    return res.status(StatusCodes.NO_CONTENT).json();    
  } catch (err) {
    console.log(err);
    console.log(clc.redBright(err.message));
    next(err);
  }
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
