'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define(
    'Status',
    {
      Status: DataTypes.STRING,
    },
    {}
  );
  Status.associate = function (models) {
    // associations can be defined here
    Status.hasMany(models.User);
  };
  return Status;
};
