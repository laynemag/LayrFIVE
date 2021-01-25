'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('submissions', [{
     userID: 1,
     username: 'TestyTesterson',
     postID: 1,
     postTitle: 'Test Post',
     postDesc: 'Simple Text',
     languages: 'Python',
     collaborators: 'N',
     gitHub: 'Y',
     hostLink: 'www.host.com',
     score: 1,
     createdAt: new Date(),
     updatedAt: new Date()


     }], {});
    
    },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('submissions', null, {});
   
  }
};
