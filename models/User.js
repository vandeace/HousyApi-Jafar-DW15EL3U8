'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      fullName: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      statusId: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Status);
  };
  return User;
};
