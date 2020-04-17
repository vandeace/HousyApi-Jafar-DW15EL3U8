'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('houses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'cities',
          key: 'id',
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
      },
      price: {
        type: Sequelize.STRING,
      },
      typerent: {
        type: Sequelize.STRING,
      },
      amenities: {
        type: Sequelize.STRING,
      },
      bedroom: {
        type: Sequelize.INTEGER,
      },
      bathroom: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('houses');
  },
};
