// const Joi = require('joi');
// const clc = require('cli-color');
const { users } = require('../models');
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

const validEmail = (email) => {
  const REGEX = /\S+@\S+\.\S+/;
  if (!email) throw errorMessages.EMAIL_IS_REQUIRED;
  if (!REGEX.test(email)) throw errorMessages.EMAIL_INVALID_FORMAT;
};

const validPassword = (password) => {
  if (!password) throw errorMessages.PASSWORD_IS_REQUIRED;
  if (password.length < 6) throw errorMessages.INVALID_PASSWORD_LENGTH;
};

const userAlreadyExistis = async (email) => {
  const result = await users.findOne({ where: { email } });
  if (result) throw errorMessages.EMAIL_ALREADY_REGISTERED;
};

module.exports = {
  // validDate,
  validDisplayName,
  validEmail,
  validPassword,
  userAlreadyExistis,
};
