const clc = require('cli-color');
const { validUserDate } = require('../helpers');
const { users } = require('../models');
// const { errorMessages } = require('../helpers');

const getUsers = async () => {
  const result = await users.findAll();
  return result;
};

const getUsersById = async (id) => {
  const result = await users.findByPk(id);
  return result;
};

const createUser = async (data) => {
  const { displayName, email, password, image } = data;
  validUserDate.validDisplayName(displayName);
  validUserDate.validEmail(email);
  validUserDate.validPassword(password);
  await validUserDate.userAlreadyExistis(email);
  const result = await users.create({ displayName, email, password, image });
  console.log(clc.greenBright(result));
  return result;
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
};
