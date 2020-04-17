const { House, City } = require('../models');
const { Op } = require('sequelize');

exports.index = async (req, res) => {
  try {
    if (req.query.typerent && req.query.price) {
      const houses = await House.findAll({
        include: [
          {
            model: City,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
        where: {
          [Op.and]: [
            { typerent: req.query.typerent },
            { price: { [Op.lt]: req.query.price } },
          ],
        },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'CityId', 'cityId'],
        },
      });
      res.status(200).send({ data: houses });
    } else if (req.query.typerent || req.query.price) {
      const houses = await House.findAll({
        include: [
          {
            model: City,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],
        //SEARCH BASED ON TYPRENT ONLY
        where: { typerent: req.query.typerent },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'CityId', 'cityId'],
        },
      });
      res.status(200).send({ data: houses });
    } else {
      const houses = await House.findAll({
        include: [
          {
            model: City,
            attributes: { exclude: ['createdAt', 'updatedAt'] },
          },
        ],

        attributes: {
          exclude: ['createdAt', 'updatedAt', 'CityId', 'cityId'],
        },
      });
      res.status(200).send({ data: houses });
    }
  } catch (error) {
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const house = await House.findOne({
      include: [
        {
          model: City,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
      where: { id: req.params.id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'CityId', 'cityId'] },
    });
    res.send({ data: house });
  } catch (error) {
    res.status(500).send({ message: 'Failed to search house!' });
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    const newhouse = await House.create(req.body);
    const house = await House.findOne({
      include: [
        {
          model: City,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
      where: { id: newhouse.id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'CityId', 'cityId'] },
    });
    res.send({ data: house });
  } catch (error) {
    res.status(500).send({ message: 'Failed to create house!' });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await House.update(req.body, { where: { id: req.params.id } });
    const house = await House.findOne({
      include: [
        {
          model: City,
          attributes: { exclude: ['createdAt', 'updatedAt'] },
        },
      ],
      where: { id: req.params.id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'CityId', 'cityId'] },
    });
    res.send({ data: house });
  } catch (error) {
    res.status(500).send({ message: 'you failed to update house' });
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    await House.destroy({ where: { id: req.params.id } });
    const { id } = req.params;
    const data = {
      id,
    };
    res.status(200).send({ data });
  } catch (error) {
    console.log(error);
  }
};
