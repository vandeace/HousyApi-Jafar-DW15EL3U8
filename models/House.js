'use strict';
module.exports = (sequelize, DataTypes) => {
  const House = sequelize.define(
    'House',
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      cityId: DataTypes.INTEGER,
      price: DataTypes.STRING,
      typerent: DataTypes.STRING,
      bedroom: DataTypes.INTEGER,
      bathroom: DataTypes.INTEGER,
    },
    {}
  );
  House.associate = function (models) {
    House.belongsTo(models.City);
  };
  return House;
};
