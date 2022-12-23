const { validUserDate, authTools } = require('../helpers');

const userLogin = async (data) => {
  const { email, password } = data;
  validUserDate.validEmail(email);
  validUserDate.validPassword(password);
  const user = await validUserDate.userNotExistis(email);
  validUserDate.verifyPassword(password, user.password);
  const { id, displayName } = user;
  const token = authTools.generateToken({ id, displayName, email });
  return token;
};

module.exports = {
  userLogin,
};
