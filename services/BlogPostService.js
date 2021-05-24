const { BlogPosts } = require('../models');
// const { errorMessages } = require('../helpers');

const getPost = async () => {
  const result = await BlogPosts.findAll();
  console.log(result);
  return result;
};

const getPostById = async (id) => {
  const result = await BlogPosts.findByPk(id);
  return result;
};

module.exports = {
  getPost,
  getPostById,
};
