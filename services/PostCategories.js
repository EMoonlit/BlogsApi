const { PostsCategories } = require('../models');
// const { errorMessages } = require('../helpers');

const getPost = async () => {
  const result = await PostsCategories.findAll();
  return result;
};

const getPostById = async (id) => {
  const result = await PostsCategories.findByPk(id);
  return result;
};

module.exports = {
  getPost,
  getPostById,
};
