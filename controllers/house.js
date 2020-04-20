const { House, User } = require('../models');
const { Op } = require('sequelize');

exports.index = async (req, res) => {
  try {
    if (req.query.typeRent && req.query.priceBelow) {
      const house = await House.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        where: {
          [Op.and]: [
            { typeRent: { [Op.eq]: req.query.typeRent } },
            { price: { [Op.lte]: req.query.priceBelow } },
          ],
        },
        attributes: { exclude: ['createdAt', 'updatedAt', 'UserId', 'userId'] },
      });
      res.send({ data: house });
    } else if (req.query.typeRent || req.query.priceBelow) {
      const house = await House.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        where: {
          [Op.or]: [
            { typeRent: { [Op.eq]: req.query.typeRent } },
            { price: { [Op.lt]: req.query.priceBelow } },
          ],
        },
        attributes: { exclude: ['createdAt', 'updatedAt', 'UserId', 'userId'] },
      });
      res.send({ data: house });
    } else {
      const house = await House.findAll({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        attributes: { exclude: ['createdAt', 'updatedAt', 'UserId', 'userId'] },
      });
      res.send({ data: house });
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to Show Houses!' });
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const house = await House.findOne({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
      where: { id: req.params.id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'UserId', 'userId'] },
    });
    res.status(200).send({ data: house });
  } catch (error) {
    res.status(500).send({ message: 'Failed to Show Houses!' });
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    if (req.user.role === 'owner') {
      const newhouse = await House.create(req.body);
      const house = await House.findOne({
        include: [
          {
            model: User,
            attributes: ['username'],
          },
        ],
        where: { id: newhouse.id },
        attributes: { exclude: ['createdAt', 'updatedAt', 'UserId', 'userId'] },
      });
      res.status(200).send({ data: house });
    } else {
      res.status(405).send({ message: 'Forbidden Request,You are not Owner' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to create house!' });
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    const user = req.user.id;
    const house = await House.findOne({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
      where: { [Op.and]: [{ id: req.params.id }, { userId: user }] },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'UserId'],
      },
    });
    if (house) {
      await House.destroy({ where: { id: req.params.id } });
      res.status(200).send({ message: 'SUCCES DELETE HOUSE' });
    } else {
      res.status(401).send({ message: 'THIS IS NOT UR HOUSE' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to create house!' });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    const user = req.user.id;
    const house = await House.findOne({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
      where: { [Op.and]: [{ id: req.params.id }, { userId: user }] },
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'userId', 'UserId'],
      },
    });
    if (house) {
      await House.update(req.body, {
        where: { [Op.and]: [{ id: req.params.id }, { userId: user }] },
      });
    } else {
      res.send({ message: 'THIS IS NOT UR HOUSE!!!' });
    }

    res.send({ data: house });
  } catch (error) {
    res.status(500).send({ message: 'you failed to update house' });
    console.log(error);
  }
};
