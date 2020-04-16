'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          fullName: 'Jafar Sidik',
          username: 'jafar',
          email: 'jafar@ganteng.com',
          password: 'jafar123',
          statusId: 1,
          gender: 'male',
          address: 'Bintaro tangerang selatan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: 'Lucinta Luna',
          username: 'lucinta',
          email: 'Lucinta@cantik.com',
          password: 'luna123',
          statusId: 2,
          gender: 'female',
          address: 'Bintaro tangerang selatan',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: 'Egi Ginting',
          username: 'ginting',
          email: 'masegi@ganteng.com',
          password: 'egi123',
          statusId: 1,
          gender: 'male',
          address: 'Bintaro tangerang selatan',
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
