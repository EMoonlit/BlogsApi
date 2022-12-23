const { StatusCodes } = require('http-status-codes');

const errorMessages = {
  INVALID_NAME_LENGTH: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"displayName" length must be at least 8 characters long',
  },

  EMAIL_INVALID_FORMAT: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"email" must be a valid email',
  },

  EMAIL_FIELD_EMPTY: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"email" is not allowed to be empty',
  },

  EMAIL_IS_REQUIRED: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"email" is required',
  },

  EMAIL_ALREADY_REGISTERED: {
    isError: true,
    status: StatusCodes.CONFLICT,
    message: 'User already registered',
  },

  INVALID_PASSWORD_LENGTH: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"password" length must be 6 characters long',
  },

  PASSWORD_IS_REQUIRED: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"password" is required',
  },

  PASSWORD_FIELD_EMPTY: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"password" is not allowed to be empty',
  },

  INCORRECT_USERNAME_OR_PASSWORD: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: 'Invalid fields',
  },

  MISSING_AUTH_TOKEN: {
    isError: true,
    status: StatusCodes.UNAUTHORIZED,
    message: 'Token not found',
  },

  JWT_MALFORMED: {
    isError: true,
    status: StatusCodes.UNAUTHORIZED,
    message: 'Expired or invalid token',
  },

  USER_NOT_FOUND: {
    isError: true,
    status: StatusCodes.NOT_FOUND,
    message: 'User does not exist',
  },

  NAME_IS_REQUIRED: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"name" is required',
  },

  CATEGORY_NAME_ALREADY_EXISTIS: {
    isError: true,
    status: StatusCodes.CONFLICT,
    message: 'Category "name" already existis',
  },

  TITLE_IS_REQUIRED: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"title" is required',
  },

  CONTENT_IS_REQUIRED: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"content" is required',
  },

  CATEGORYID_IS_REQUIRED: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"categoryIds" is required',
  },

  CATEGORYID_NOT_FOUND: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: '"categoryIds" not found',
  },

  POST_NOT_EXIST: {
    isError: true,
    status: StatusCodes.NOT_FOUND,
    message: 'Post does not exist',
  },

  CATEGORIES_CANNOT_BE_EDITED: {
    isError: true,
    status: StatusCodes.BAD_REQUEST,
    message: 'Categories cannot be edited',
  },

  ONLY_CREATED_USER: {
    isError: true,
    status: StatusCodes.UNAUTHORIZED,
    message: 'Unauthorized user',
  },
};

module.exports = errorMessages;
