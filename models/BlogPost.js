const definePostModel = (sequelize, DataTypes) => {
  const Post = sequelize.define('blogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  });

  Post.associate = (models) => {
    Post.belongsTo(models.User, { as: 'post', foreignKey: 'userId' });
  };

  return Post;
};

module.exports = definePostModel;
