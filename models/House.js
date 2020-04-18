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
      amenities: {
        type: DataTypes.STRING,
        get() {
          return this.getDataValue('amenities').split(', ');
        },
      },
      bedroom: DataTypes.INTEGER,
      bathroom: DataTypes.INTEGER,
    },
    {}
  );
  House.associate = function (models) {
    // associations can be defined here
    House.belongsTo(models.City);
    House.hasMany(models.Transaction);
  };
  return House;
};
