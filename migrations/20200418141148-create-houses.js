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
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
      },
      address: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      typeRent: {
        type: Sequelize.STRING,
      },
      amenities: {
        type: Sequelize.STRING,
      },
      bedroom: {
        type: Sequelize.STRING,
      },
      bathroom: {
        type: Sequelize.STRING,
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
