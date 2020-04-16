const { House, City } = require('../models');

exports.index = async (req, res) => {
  try {
    const house = await House.findAll({
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
    res.send({ data: house });
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
    console.log(error);
  }
};
