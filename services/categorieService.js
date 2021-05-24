const { Categories } = require('../models');
// const { errorMessages } = require('../helpers');

const getCategories = async () => {
  const result = await Categories.findAll();
  return result;
};

const getCategoriesById = async (id) => {
  const result = await Categories.findByPk(id);
  return result;
};

module.exports = {
  getCategories,
  getCategoriesById,
};
