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

module.exports = {
  getUsers,
  getUsersById,
};
