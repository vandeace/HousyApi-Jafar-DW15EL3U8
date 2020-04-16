'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          fullName: 'John Doe',
          username: 'john',
          email: 'john@example.com',
          password: 'john123',
          listAsId: 1,
          gender: 'male',
          address: 'Jln. Marvel Universe, RT.21 RW.69',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: 'Jafar Sidik',
          username: 'jafar',
          email: 'jafar@example.com',
          password: 'jafar123',
          listAsId: 2,
          gender: 'male',
          address: 'Jln. Nangka, RT.21 RW.69',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: 'Annisa Bahar',
          username: 'annisa',
          email: 'nisa@example.com',
          password: 'nisa123',
          listAsId: 2,
          gender: 'female',
          address: 'Jln. Tuanku tambusai ,RT.22 RW.24',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: 'Mutia Deni',
          username: 'mumut',
          email: 'mutia@example.com',
          password: 'mumut123',
          listAsId: 1,
          gender: 'female',
          address: 'Jln. Paus, RT.31 RW.96',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: 'Colt Steele',
          username: 'colt',
          email: 'colt@example.com',
          password: 'colt123',
          listAsId: 1,
          gender: 'male',
          address: 'Jln. DC Universe, RT.45 RW.70',
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
