'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('blogPosts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {

      },
      content: {

      },
      userId: {

      },
      published: {

      },
      updated: {

      },
    });
  },

  down: async (queryInterface, Sequelize) => {

   await queryInterface.dropTable('blogPosts');

  }
};
