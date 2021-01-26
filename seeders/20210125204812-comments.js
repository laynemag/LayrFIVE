'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkInsert('comments', [{
        userID: 1,
        username: 'TestyTesterson',
        comment: 'great post!',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('comments', null, {});
  
  }
};
