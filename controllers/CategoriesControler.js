const { StatusCodes } = require('http-status-codes');
const clc = require('cli-color');
const { categorieService } = require('../services');

const getCategories = async (_req, res, next) => {
  try {
    const result = await categorieService.getCategories();
    if (result.isError) return next(result);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    console.log(clc.redBright(`ERRO getUsers controller: ${err.message}`));
    throw new Error(err);
  }
};

const getCategoriesById = async (req, res) => {
  const { id } = req.params;
  const result = await categorieService.getCategoriesById(id);
  return res.status(StatusCodes.OK).json(result);
};

const createCategorie = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await categorieService.createCategorie(name);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    console.log(clc.redBright(`ERRO getUsers controller: ${err.message}`));
    next(err);
  }
};

const updateCategorie = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = { userI: id, userName: name };
  return res.status(StatusCodes.OK).json({ message: result });
};

const deleteCategorie = (req, res) => {
  const { id } = req.params;
  const result = id;
  return res.status(StatusCodes.OK).json({ message: result });
};

module.exports = {
  getCategories,
  getCategoriesById,
  createCategorie,
  updateCategorie,
  deleteCategorie,
};
