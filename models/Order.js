'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      userId: DataTypes.INTEGER,
      checkIn: DataTypes.STRING,
      checkOut: DataTypes.STRING,
      houseId: DataTypes.STRING,
      total: DataTypes.STRING,
      status: DataTypes.STRING,
      payment: DataTypes.STRING,
    },
    {}
  );
  Order.associate = function (models) {
    // associations can be defined here
    Order.belongsTo(models.User);
    Order.belongsTo(models.House);
  };
  return Order;
};
