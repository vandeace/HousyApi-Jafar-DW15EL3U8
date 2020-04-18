'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'houses',
      [
        {
          name: 'House Remaja',
          address: 'Permata Bintaro Residence Pondok Aren,Tangerang Selatan',
          cityId: 3,
          price: 20000000,
          typerent: 'year',
          amenities: 'furnisehd, shared acomodation, pet allowed',
          bedroom: 3,
          bathroom: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // {
        //   name: 'House Egi',
        //   address: 'Permata Bintaro Residence Pondok Aren,Tangerang Selatan',
        //   cityId: 1,
        //   price: 40000000,
        //   typerent: 'month',
        //   amenities: 'furnisehd, shared acomodation, pet allowed',
        //   bedroom: 3,
        //   bathroom: 3,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   name: 'House Jafar',
        //   address: 'Permata Bintaro Residence Pondok Aren,Tangerang Selatan',
        //   cityId: 2,
        //   price: 40000000,
        //   typerent: 'day',
        //   amenities: 'furnisehd, shared acomodation, pet allowed',
        //   bedroom: 3,
        //   bathroom: 3,
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
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
