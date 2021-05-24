const { Router } = require('express');
const { CategoriesController } = require('../controllers');
const middleWare = require('../middlewares');

const categorieRoute = Router();

categorieRoute
  .get('/:id', middleWare.authMiddleware, CategoriesController.getCategoriesById)
  .get('/', middleWare.authMiddleware, CategoriesController.getCategories)
  .post('/', middleWare.authMiddleware, CategoriesController.createCategorie)
  .put('/:id', CategoriesController.updateCategorie)
  .delete('/em', CategoriesController.deleteCategorie);

module.exports = categorieRoute;