'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'houses',
      [
        {
          name: 'House Astina',
          address: 'Permata Bintaro Residence Pondok Aren,Tangerang Selatan',
          cityId: 3,
          price: 40000000,
          typerent: 'year',
          bedroom: 3,
          bathroom: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'House Egi',
          address: 'Permata Bintaro Residence Pondok Aren,Tangerang Selatan',
          cityId: 1,
          price: 40000000,
          typerent: 'month',
          bedroom: 3,
          bathroom: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'House Jafar',
          address: 'Permata Bintaro Residence Pondok Aren,Tangerang Selatan',
          cityId: 2,
          price: 40000000,
          typerent: 'day',
          bedroom: 3,
          bathroom: 3,
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
