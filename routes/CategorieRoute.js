const { Router } = require('express');
const { CategoriesController } = require('../controllers');

const categorieRoute = Router();

categorieRoute
  .get('/', CategoriesController.getCategories)
  .get('/:id', CategoriesController.getCategoriesById)
  .post('/', CategoriesController.createCategorie)
  .put('/:id', CategoriesController.updateCategorie)
  .delete('/em', CategoriesController.deleteCategorie);

module.exports = categorieRoute;