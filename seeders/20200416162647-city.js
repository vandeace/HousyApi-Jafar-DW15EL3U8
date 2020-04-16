'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'cities',
      [
        {
          city: 'jakarta',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: 'bandung',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: 'tangerang',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
