'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', [{
        username: 'TestyTesterson',
        password: 'test',
        imageurl: 'www.github.com/image',
        github: 'www.github.com/testy',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
