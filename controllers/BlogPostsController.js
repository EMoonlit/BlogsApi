const { StatusCodes } = require('http-status-codes');

const clc = require('cli-color');
const { blogPostService } = require('../services');

const getPosts = async (_req, res) => {
  try {
    const result = await blogPostService.getPost();
    // if (result.isError) return next(result);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    console.log(clc.redBright(`ERRO getPosts controller: ${err.message}`));
    throw new Error(err);
  }
};

const getPostByQueryParam = async (req, res, next) => {
  const { q } = req.query;
  try {
    const result = await blogPostService.getPostByQuery(q);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    console.log(err);
    console.log(clc.redBright(err.message));
    next(err);
  }
};

const getPostsById = async (req, res, next) => {
  const { id } = req.params;
  const result = await blogPostService.getPostById(id);
  if (result.isError) return next(result);
  return res.status(StatusCodes.OK).json(result);
};

const createPost = async (req, res, next) => {
  try {
    const data = req.body;
    const userId = req.user.id;
    const result = await blogPostService.createPost(data, userId);
    if (result.isError) return next(result);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;
  const userId = req.user.id;
  try {
    const result = await blogPostService.editPostById(data, id, userId);
    console.log(clc.greenBright(result));
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    console.log(err);
    console.log(clc.redBright(err.message));
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;
    const result = await blogPostService.deletePostById(id, userId);
    console.log(clc.bgRedBright(result));
    return res.status(StatusCodes.NO_CONTENT).json();
  } catch (err) {
    console.log(err);
    console.log(clc.redBright(err.message));
    next(err);
  }
};

module.exports = {
  getPosts,
  getPostsById,
  createPost,
  updatePost,
  deletePost,
  getPostByQueryParam,
};
