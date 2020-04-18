const { Transaction, House, City } = require('../models');

exports.index = async (req, res) => {
  try {
    const transaction = await Transaction.findAll({
      include: [
        {
          model: House,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'cityId', 'CityId'],
          },
          include: [
            {
              model: City,
              attributes: { exclude: ['createdAt', 'updatedAt'] },
            },
          ],
        },
      ],
      attributes: { exclude: ['createdAt', 'updatedAt', 'houseid', 'HouseId'] },
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'failed to view the transaction' });
  }
};

exports.show = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      include: [
        {
          model: House,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'cityId', 'CityId'],
          },
          include: [
            {
              model: City,
              attributes: { exclude: ['createdAt', 'updatedAt'] },
            },
          ],
        },
      ],
      where: { id: req.params.id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'houseid', 'HouseId'] },
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'failed to search transaction' });
  }
};

exports.create = async (req, res) => {
  try {
    const newTransaction = await Transaction.create(req.body);
    const transaction = await Transaction.findOne({
      include: [
        {
          model: House,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'cityId', 'CityId'],
          },
          include: [
            {
              model: City,
              attributes: { exclude: ['createdAt', 'updatedAt'] },
            },
          ],
        },
      ],
      where: { id: newTransaction.id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'houseid', 'HouseId'] },
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'failed to create transaction' });
  }
};

exports.update = async (req, res) => {
  try {
    await Transaction.update(req.body, { where: { id: req.params.id } });
    const transaction = await Transaction.findOne({
      include: [
        {
          model: House,
          attributes: {
            exclude: ['createdAt', 'updatedAt', 'cityId', 'CityId'],
          },
          include: [
            {
              model: City,
              attributes: { exclude: ['createdAt', 'updatedAt'] },
            },
          ],
        },
      ],
      where: { id: req.params.id },
      attributes: { exclude: ['createdAt', 'updatedAt', 'houseid', 'HouseId'] },
    });
    res.status(200).send({ data: transaction });
  } catch (error) {
    console.log(error);
    res.status(200).send({ message: 'failed to update transaction' });
  }
};
