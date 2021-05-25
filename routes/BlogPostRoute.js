const { Router } = require('express');
const { BlogPostsController } = require('../controllers');
const meddleWare = require('../middlewares');

const blogPostRoute = Router();

blogPostRoute
  .get('/', meddleWare.authMiddleware, BlogPostsController.getPosts)
  .get('/:id', meddleWare.authMiddleware, BlogPostsController.getPostsById)
  .post('/', meddleWare.authMiddleware, BlogPostsController.createPost)
  .put('/:id', BlogPostsController.updatePost)
  .delete('/em', BlogPostsController.deletePost);

module.exports = blogPostRoute;