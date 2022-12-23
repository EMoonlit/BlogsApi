const { StatusCodes } = require('http-status-codes');
const { loginService } = require('../services');

// Login
const signIn = async (req, res, next) => {
  const data = req.body;
  try {
    const result = await loginService.userLogin(data);
    if (result.isError) return next(result);
    return res.status(StatusCodes.OK).json({ token: result });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  signIn,
};
