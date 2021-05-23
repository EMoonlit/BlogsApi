const { Router } = require('express');
const { BlogPostsController } = require('../controllers');

const blogPostRoute = Router();

blogPostRoute
  .get('/', BlogPostsController.getPosts)
  .get('/:id', BlogPostsController.getPostsById)
  .post('/', BlogPostsController.createPost)
  .put('/:id', BlogPostsController.updatePost)
  .delete('/em', BlogPostsController.deletePost);

module.exports = blogPostRoute;