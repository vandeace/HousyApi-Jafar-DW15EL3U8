'use strict';
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define(
    'House',
    {
      name: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      price: DataTypes.STRING,
      typeRent: DataTypes.STRING,
      amenities: DataTypes.STRING,
      bedroom: DataTypes.STRING,
      bathroom: DataTypes.STRING,
    },
    {}
  );
  House.associate = function (models) {
    // associations can be defined here
    House.belongsTo(models.User);
  };
  return House;
};
