const clc = require('cli-color');
const { userService } = require('../services');
const { authTools, errorMessages } = require('../helpers');

const authMiddleware = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) return next(errorMessages.MISSING_AUTH_TOKEN);

  try {
    console.log(clc.magenta(token));
    const decoded = authTools.verifyToken(token);
    // console.log(clc.magentaBright(decoded.displayName));
    const result = await userService.getUsersById(decoded.id);
    if (!result) return next(errorMessages.INCORRECT_USERNAME_OR_PASSWORD);
    // console.log('>>', result.dataValues);
 
    req.user = result.dataValues;

    next();
  } catch (err) {
    next(errorMessages.JWT_MALFORMED);
  }
};

module.exports = authMiddleware;