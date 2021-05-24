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

const getPostsById = async (req, res) => {
  const { id } = req.params;
  const result = await blogPostService.getPostById(id);
  return res.status(StatusCodes.OK).json({ message: result });
};

const createPost = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = { userId: id, userName: name };
  return res.status(StatusCodes.OK).json({ message: result });
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = { userI: id, userName: name };
  return res.status(StatusCodes.OK).json({ message: result });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  const result = id;
  return res.status(StatusCodes.OK).json({ message: result });
};

module.exports = {
  getPosts,
  getPostsById,
  createPost,
  updatePost,
  deletePost,
};
