'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'houses',
      [
        {
          name: 'House Remaja',
          userId: 1,
          address: 'Permata Bintaro Residence Pondok Aren,Tangerang Selatan',
          city: 'jakarta',
          price: '20.000.000',
          typeRent: 'year',
          amenities: 'furnisehd, shared acomodation, pet allowed',
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
