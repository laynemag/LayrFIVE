'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projects', [{
      userID: 1,
      postTitle: 'Test Post',
      postDesc: 'Simple Text',
      languages: ['Python', 'CSS'],
      collaborators: true,
      githubUsername: 'TestPerson',
      githubRepo: 'Test Repo',
      hostLink: 'www.host.com',
      score: 1,
      createdAt: new Date(),
      updatedAt: new Date()
 
 
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
