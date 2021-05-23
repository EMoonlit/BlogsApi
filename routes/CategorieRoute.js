const { Router } = require('express');
const { categoriesController } = require('../controllers');

const categorieRoute = Router();

categorieRoute
  .get('/', categoriesController.getCategories)
  .get('/:id', categoriesController.getCategoriesById)
  .post('/', categoriesController.createCategorie)
  .put('/:id', categoriesController.updateCategorie)
  .delete('/em', categoriesController.deleteCategorie);

module.exports = categorieRoute;