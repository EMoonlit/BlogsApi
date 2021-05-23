const { categories } = require('../models');
// const { errorMessages } = require('../helpers');

const getCategories = async () => {
  const result = await categories.findAll();
  return result;
};

const getCategoriesById = async (id) => {
  const result = await categories.findByPk(id);
  return result;
};

module.exports = {
  getCategories,
  getCategoriesById,
};
