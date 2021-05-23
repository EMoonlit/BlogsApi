const defineUserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, { timestamps: false });

  return User;
};

module.exports = defineUserModel;
