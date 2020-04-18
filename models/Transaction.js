'use strict';
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'Transaction',
    {
      checkin: DataTypes.STRING,
      checkout: DataTypes.STRING,
      houseid: DataTypes.INTEGER,
      total: DataTypes.STRING,
      status: DataTypes.STRING,
      attachment: DataTypes.STRING,
    },
    {}
  );
  Transaction.associate = function (models) {
    // associations can be defined here
    Transaction.belongsTo(models.House);
  };
  return Transaction;
};
