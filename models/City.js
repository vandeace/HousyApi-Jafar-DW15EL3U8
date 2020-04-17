'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define(
    'City',
    {
      city: DataTypes.STRING,
    },
    {}
  );
  City.associate = function (models) {
    // associations can be defined here
    City.hasMany(models.House);
  };
  return City;
};
