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

const getUsersById = async (req, res) => {
  const { id } = req.params;
  const result = await userService.getUsersById(id);
  return res.status(StatusCodes.OK).json({ message: result });
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

const deleteUser = (req, res) => {
  const { id } = req.params;
  const result = id;
  return res.status(StatusCodes.OK).json({ message: result });
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  updateUser,
  deleteUser,
};
