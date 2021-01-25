'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('profiles', [{
        userID: 1,
        roleType: 3,
        postTotal: 1,
        userScorePY: 1,
        userScoreJS: 1,
        userScoreCsharp: 1,
        userScoreHTML: 1,
        userScoreCSS: 1,
        userScoreJAVA: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('profiles', null, {});
     
  }
};
