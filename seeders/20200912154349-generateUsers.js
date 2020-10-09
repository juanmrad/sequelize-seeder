'use strict';
var faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {

    var newData = [];

    for (let i = 0; i < 50; i++) {
        const seedData = {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          gender: i % 2 == 0 ? 'female' : 'male',
          createdAt: new Date(),
          updatedAt: new Date()
        };
        newData.push(seedData);
    }
    await queryInterface.bulkInsert('users', newData)
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
