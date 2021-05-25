const clc = require('cli-color');
const { validUserDate, authTools } = require('../helpers');
const { Users } = require('../models');
const { errorMessages } = require('../helpers');

const getUsers = async () => {
  const result = await Users.findAll();
  const removePassword = result.map((e) => (
    {
      id: e.id,
      displayName: e.displayName,
      email: e.email,
      image: e.image,
    }
  ));
  // console.log('removePassword', removePassword);
  return removePassword;
};

const getUsersById = async (id) => {
  const result = await Users.findByPk(id);
  if (!result) return errorMessages.USER_NOT_FOUND;
  return result;
};

const createUser = async (data) => {
  const { displayName, email, password, image } = data;
  validUserDate.validDisplayName(displayName);
  validUserDate.validEmail(email);
  validUserDate.validPassword(password);
  await validUserDate.userAlreadyExistis(email);
  const result = await Users.create({ displayName, email, password, image });
  const { id } = result.dataValues;
  const token = authTools.generateToken({ id, displayName, email });
  console.log(clc.greenBright(result));
  return token;
};

const deleteUser = async (userId) => {
  const result = await Users.destroy({ where: { id: userId } });
  console.log(result);
  return result;
};

module.exports = {
  getUsers,
  getUsersById,
  createUser,
  deleteUser,
};
