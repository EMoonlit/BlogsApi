const { BlogPosts, PostsCategories } = require('../models');
const { validUserDate } = require('../helpers');

const getPost = async () => {
  const result = await BlogPosts.findAll();
  console.log(result);
  return result;
};

const getPostById = async (id) => {
  const result = await BlogPosts.findByPk(id);
  return result;
};

const createPost = async (data, userId) => {
  const { title, categoryIds, content } = data;
  validUserDate.titleIsRequired(title);
  validUserDate.contentIsRequired(content);
  validUserDate.categoryIdIsRequired(categoryIds);
  await validUserDate.categoryIdExistis(categoryIds);
  const result = await BlogPosts.create({ title, content, userId });
  const postCategoriesList = categoryIds.map(
    (e) => ({ postId: result.dataValues.id, categoryId: e }),
  );
  await PostsCategories.bulkCreate(postCategoriesList);
  return result.dataValues;
};

module.exports = {
  getPost,
  getPostById,
  createPost,
};
