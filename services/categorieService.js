const { Categories } = require('../models');
const { validUserDate } = require('../helpers');
// const { errorMessages } = require('../helpers');

const getCategories = async () => {
  const result = await Categories.findAll();
  return result;
};

const getCategoriesById = async (id) => {
  const result = await Categories.findByPk(id);
  return result;
};

const createCategorie = async (name) => {
  validUserDate.validCategoryName(name);
  await validUserDate.categoryAlreadyExistis(name);
  const result = await Categories.create({ name });
  return result.dataValues;
};

module.exports = {
  getCategories,
  getCategoriesById,
  createCategorie,
};
