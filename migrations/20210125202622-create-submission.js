'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('submissions', {
      // id: {
      //   allowNull: false,
      //   autoIncrement: true,
      //   primaryKey: true,
      //   type: Sequelize.INTEGER
      // },
      userID: {
        type: Sequelize.INTEGER,
        model: 'users',
        key: 'id'
      },
      username: {
        type: Sequelize.STRING,
        model: 'users',
        key: 'username'
      },
      postID: {
        type: Sequelize.INTEGER
      },
      postTitle: {
        type: Sequelize.STRING
      },
      postDesc: {
        type: Sequelize.STRING
      },
      languages: {
        type: Sequelize.STRING
      },
      collaborators: {
        type: Sequelize.STRING
      },
      gitHub: {
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
    await queryInterface.dropTable('submissions');
  }
};