// const Joi = require('joi');
// const clc = require('cli-color');
const { Users, Categories, BlogPosts } = require('../models');
const errorMessages = require('./errorMessages');

// const validDate = (date) => {
//   const result = Joi.object({
//     displayName: Joi.string().min(8).required(),
//     email: Joi.string().email().required(),
//     password: Joi.string().min(6).required(),
//     image: Joi.string(),
//   }).validate(date);
//   console.log(result.error.details[0].message);
//   return result;
// };

const validDisplayName = (displayName) => {
  if (!displayName || displayName.length < 8) throw errorMessages.INVALID_NAME_LENGTH;
};

const validCategoryName = (name) => {
  if (!name || name === '') throw errorMessages.NAME_IS_REQUIRED;
};

const categoryAlreadyExistis = async (name) => {
  const result = await Categories.findOne({ where: { name } });
  // console.log('>>>', result);
  if (result) throw errorMessages.CATEGORY_NAME_ALREADY_EXISTIS;
};

const validEmail = (email) => {
  const REGEX = /\S+@\S+\.\S+/;
  if (email === '') throw errorMessages.EMAIL_FIELD_EMPTY;
  if (!email) throw errorMessages.EMAIL_IS_REQUIRED;
  if (!REGEX.test(email)) throw errorMessages.EMAIL_INVALID_FORMAT;
};

const validPassword = (password) => {
  if (password === '') throw errorMessages.PASSWORD_FIELD_EMPTY;
  if (!password) throw errorMessages.PASSWORD_IS_REQUIRED;
  if (password.length < 6) throw errorMessages.INVALID_PASSWORD_LENGTH;
};

const userAlreadyExistis = async (email) => {
  const result = await Users.findOne({ where: { email } });
  if (result) throw errorMessages.EMAIL_ALREADY_REGISTERED;
};

const userNotExistis = async (email) => {
  const result = await Users.findOne({ where: { email } });
  if (!result) throw errorMessages.INCORRECT_USERNAME_OR_PASSWORD;
  return result.dataValues;
};

const verifyPassword = (password, userPassword) => {
  if (password !== userPassword) throw errorMessages.INCORRECT_USERNAME_OR_PASSWORD;
};

const titleIsRequired = (title) => {
  if (!title || title === '') throw errorMessages.TITLE_IS_REQUIRED;
};

const contentIsRequired = (content) => {
  if (!content || content === '') throw errorMessages.CONTENT_IS_REQUIRED;
};

const categoryIdIsRequired = (categoryIds) => {
  if (!categoryIds || categoryIds.length === 0) throw errorMessages.CATEGORYID_IS_REQUIRED;
};

const categoriesCannotBeEdited = (categoryIds) => {
  if (categoryIds || categoryIds === '') throw errorMessages.CATEGORIES_CANNOT_BE_EDITED;
};

const categoryIdExistis = async (categoryIds) => {
  const result = await Categories.findAll();
  const categoryList = result.map((e) => (e.dataValues.id));
  // const teste = categoryIds.find((e) => e === categoryList);
  categoryIds.forEach((id) => {
    if (categoryList.includes(id) === false) throw errorMessages.CATEGORYID_NOT_FOUND;
  });
};

const verifyPostExistis = async (id) => {
  const result = await BlogPosts.findOne({ where: { id } });
  if (!result) throw errorMessages.POST_NOT_EXIST;
};

const verifyUserId = async (id, userId) => {
  const result = await BlogPosts.findOne({ where: { id, userId } });
  console.log('result do veryfi user id', result);
  if (!result) throw errorMessages.ONLY_CREATED_USER;
};

module.exports = {
  // validDate,
  validDisplayName,
  validEmail,
  validPassword,
  userAlreadyExistis,
  userNotExistis,
  verifyPassword,
  validCategoryName,
  categoryAlreadyExistis,
  titleIsRequired,
  contentIsRequired,
  categoryIdIsRequired,
  categoryIdExistis,
  categoriesCannotBeEdited,
  verifyUserId,
  verifyPostExistis,
};
