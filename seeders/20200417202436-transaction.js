'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'transactions',
      [
        {
          checkin: '31-03-2020',
          checkout: '31-03-2021',
          houseid: 1,
          total: '30.000.000',
          status: 'approved',
          attachment: 'bca.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: '30-06-2020',
          checkout: '30-06-2021',
          houseid: 5,
          total: '25.000.000',
          status: 'waiting payment',
          attachment: 'bca.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          checkin: '18-09-2020',
          checkout: '18-09-2021',
          houseid: 3,
          total: '40.000.000',
          status: 'approved',
          attachment: 'bca.jpeg',
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
