const definePostModel = (sequelize, DataTypes) => {
  const Post = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { timestamps: false });

  Post.associate = (models) => {
    Post.belongsTo(models.Users, { as: 'post', foreignKey: 'userId' });
  };

  return Post;
};

module.exports = definePostModel;
