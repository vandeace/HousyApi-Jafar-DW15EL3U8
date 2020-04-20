const { Order, House, User } = require('../models');
const { Op } = require('sequelize');

exports.create = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    if (req.user.role === 'tenant') {
      const newOrder = await Order.create(req.body);
      const order = await Order.findOne({
        include: [
          {
            model: House,
            attributes: ['name', 'price', 'address'],
          },
        ],
        where: { id: newOrder.id },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'HouseId', 'UserId', 'houseId'],
        },
      });
      res.status(200).send({ data: order });
    } else {
      res.status(405).send({ message: 'Forbidden Request,You are not Buyer' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to create order!' });
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const user = req.user.id;
    const order = await Order.findOne({
      include: [
        {
          model: House,
          attributes: ['name', 'price', 'address'],
        },
      ],
      where: { [Op.and]: [{ id: req.params.id }, { userId: user }] },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (order) {
      res.status(200).send({ data: order });
    } else {
      res.status(401).send({ message: 'THIS IS NOT YOUR HOUSE' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to Show Order!' });
    console.log(error);
  }
};

exports.index = async (req, res) => {
  try {
    const user = req.user.id;
    const order = await Order.findAll({
      include: [
        {
          model: House,
          attributes: ['name', 'price', 'address'],
        },
      ],
      where: { userId: user },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    res.status(200).send({ data: order });
  } catch (error) {
    res.status(500).send({ message: 'Failed to Show Order!' });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const user = req.user.id;
    const order = await Order.findOne({
      include: [
        {
          model: House,
          attributes: ['name', 'price', 'address'],
        },
      ],
      where: { [Op.and]: [{ id: req.params.id }, { userId: user }] },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (order) {
      Order.update(req.body, {
        where: { [Op.and]: [{ id: req.params.id }, { userId: user }] },
      });
      res.status(200).send({ data: order });
    } else {
      res.status(401).send({ message: 'THIS IS NOT YOUR HOUSE!' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to Show Order!' });
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    const user = req.user.id;
    const order = await Order.findOne({
      include: [
        {
          model: House,
          attributes: ['name', 'price', 'address'],
        },
      ],
      where: { [Op.and]: [{ id: req.params.id }, { userId: user }] },
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    if (order) {
      await Order.destroy({
        where: { [Op.and]: [{ id: req.params.id }, { userId: user }] },
      });
      res.status(200).send({ message: 'success delete data' });
    } else {
      res.status(401).send({ message: 'DATA NOT AVAILABLE' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to delete data!' });
    console.log(error);
  }
};
