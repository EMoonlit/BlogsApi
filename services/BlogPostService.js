const { blogPosts } = require('../models');
// const { errorMessages } = require('../helpers');

const getPost = async () => {
  const result = await blogPosts.findAll();
  return result;
};

const getPostById = async (id) => {
  const result = await blogPosts.findByPk(id);
  return result;
};

module.exports = {
  getPost,
  getPostById,
};
