const definePostCategories = (sequelize, _DataTypes) => {
  const PostsCategories = sequelize.define('PostsCategories', {}, { timestamps: false });

  PostsCategories.associate = (models) => {
    models.BlogPosts.belongsToMany(models.Categorie, {
      as: 'Categories',
      through: PostsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });

    models.Categorie.belongsToMany(models.BlogPosts, {
      as: 'BlogPosts',
      through: PostsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return PostsCategories;
};

module.exports = definePostCategories;
