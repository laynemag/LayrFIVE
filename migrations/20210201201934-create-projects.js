'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        model: 'users',
        key: 'id'
      },
      postTitle: {
        type: Sequelize.STRING
      },
      postDesc: {
        type: Sequelize.STRING
      },
      languages: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      collaborators: {
        type: Sequelize.BOOLEAN
      },
      githubUsername: {
        type: Sequelize.STRING
      },
      githubRepo: {
        type: Sequelize.STRING
      },
      hostLink: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('projects');
  }
};