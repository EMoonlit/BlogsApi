const { Router } = require('express');
const { CategoriesController } = require('../controllers');
const middleWare = require('../middlewares');

const categorieRoute = Router();

categorieRoute
  .get('/', CategoriesController.getCategories)
  .get('/:id', CategoriesController.getCategoriesById)
  .post('/', middleWare.authMiddleware, CategoriesController.createCategorie)
  .put('/:id', CategoriesController.updateCategorie)
  .delete('/em', CategoriesController.deleteCategorie);

module.exports = categorieRoute;