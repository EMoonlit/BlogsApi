const { Op } = require('sequelize');
const clc = require('cli-color');
const { BlogPosts, PostsCategories } = require('../models');
const { validUserDate, errorMessages } = require('../helpers');

const getPost = async () => {
  const result = await BlogPosts.findAll({ include: ['user', 'categories'] });
  // const user = await BlogPosts.getUser();
  // console.log(user);
  return result;
};

const getPostByQuery = async (q) => {
  // const result = await BlogPosts.findAll({ where: { $or: [{ title: { $like: `%${q}%` } }, { content: { $like: `%${q}%` } }] } });
  const result = await BlogPosts.findAll(
    {
      include: ['user', 'categories'],
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${q}%` } },
          { content: { [Op.like]: `%${q}%` } },
        ],
      },
    },
  
  );
  return result;
};

const getPostById = async (id) => {
  const result = await BlogPosts.findByPk(id, { include: ['user', 'categories'] });
  if (!result) return errorMessages.POST_NOT_EXIST;
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

const editPostById = async (data, id, userId) => {
  if (data.categoryIds) return validUserDate.categoriesCannotBeEdited(data.categoryIds);
  const { title, content } = data;
  validUserDate.titleIsRequired(title);
  validUserDate.contentIsRequired(content);
  await validUserDate.verifyPostExistis(id);
  await validUserDate.verifyUserId(id, userId);
  const update = await BlogPosts.update({ title, content }, { where: { id } });
  if (!update) throw Error('errouuuu');
  const result = await BlogPosts.findByPk(id, { include: ['user', 'categories'] });
  console.log(clc.bgGreen(result));
  return result;
};

const deletePostById = async (id, userId) => {
  await validUserDate.verifyPostExistis(id);
  await validUserDate.verifyUserId(id, userId);
  const result = await BlogPosts.destroy({ where: { id } });
  console.log(clc.bgWhite(result));
  return result;
};

module.exports = {
  getPost,
  getPostById,
  createPost,
  editPostById,
  deletePostById,
  getPostByQuery,
};
