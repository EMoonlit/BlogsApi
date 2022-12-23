const { Router } = require('express');
const { BlogPostsController } = require('../controllers');
const middleWare = require('../middlewares');

const blogPostRoute = Router();

blogPostRoute
  // .get('/post/search', middleWare.authMiddleware, BlogPostsController.getPostByQueryParam)
  .get('/', middleWare.authMiddleware, BlogPostsController.getPosts)
  .get('/:id', middleWare.authMiddleware, BlogPostsController.getPostsById)
  .post('/', middleWare.authMiddleware, BlogPostsController.createPost)
  .put('/:id', middleWare.authMiddleware, BlogPostsController.updatePost)
  .delete('/:id', middleWare.authMiddleware, BlogPostsController.deletePost);

module.exports = blogPostRoute;