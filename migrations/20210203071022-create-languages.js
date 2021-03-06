'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('languages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      postTotal: {
        type: Sequelize.INTEGER
      },
      userScorePY: {
        type: Sequelize.INTEGER
      },
      userScoreJS: {
        type: Sequelize.INTEGER
      },
      userScoreCsharp: {
        type: Sequelize.INTEGER
      },
      userScoreHTML: {
        type: Sequelize.INTEGER
      },
      userScoreCSS: {
        type: Sequelize.INTEGER
      },
      userScoreJAVA: {
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
    await queryInterface.dropTable('languages');
  }
};