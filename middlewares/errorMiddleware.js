const { StatusCodes } = require('http-status-codes');
const clc = require('cli-color');

const errorMiddleware = (err, _req, res, _next) => {
  console.log(err);
  if (err.status) {
    console.log(clc.red(`ERROR RECEBIDO PELO MIDDLEWARE: ${err.message}`));
    return res.status(err.status).json({ message: err.message });
  }
  console.log(clc.red(`ERROR RECEBIDO PELO MIDDLEWARE: ${err.message}`));
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    error: 'Deu ruim...',
  });
};

module.exports = errorMiddleware;
