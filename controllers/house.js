const { House, User } = require('../models');
const { Op } = require('sequelize');

exports.index = async (req, res) => {
  try {
    const house = await House.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: [
              'createdAt',
              'updatedAt',
              'password',
              'fullName',
              'email',
              'gender',
              'address',
            ],
          },
        },
      ],
      attributes: { exclude: ['createdAt', 'updatedAt', 'UserId', 'userId'] },
    });
    res.send({ data: house });
    console.log(userId);
  } catch (error) {
    res.status(500).send({ message: 'Failed to Show Houses!' });
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const house = await House.findAll({
      include: [
        {
          model: User,
          attributes: {
            exclude: [
              'createdAt',
              'updatedAt',
              'password',
              'fullName',
              'email',
              'gender',
              'address',
            ],
          },
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
      res.status(200).send({ data: newhouse });
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
    req.body.userId = req.user.id;
    if (req.user.role === 'owner') {
      await House.destroy({ where: { id: req.params.id } });
      const { id } = req.params;
      const data = {
        id,
      };
      res.status(200).send({ data });
    } else {
      res.status(405).send({
        message: 'Forbidden Request,You are not belong to this House',
      });
    }
  } catch (error) {
    res.status(500).send({ message: 'Failed to create house!' });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    req.body.userId = req.user.id;
    if (req.user.role === 'owner') {
      await House.update(req.body, { where: { id: req.params.id } });
      const house = await House.findOne({
        include: [
          {
            model: User,
            attributes: {
              exclude: [
                'createdAt',
                'updatedAt',
                'username',
                'email',
                'password',
                'gender',
                'address',
              ],
            },
          },
        ],
        where: { id: req.params.id },
        attributes: {
          exclude: ['createdAt', 'updatedAt', 'userId', 'UserId'],
        },
      });
      res.send({ data: house });
    } else {
      res.status(405).send({
        message: 'Forbidden Request,You are not belong to this House',
      });
    }
  } catch (error) {
    res.status(500).send({ message: 'you failed to update house' });
    console.log(error);
  }
};
// exports.destroy = async (req, res) => {
//   try {
//     await House.destroy({
//       where: {
//         [Op.and]: [{ id: req.params.id }, { userId: req.user.id }],
//       },
//     });
//     const { id } = req.params;
//     const data = {
//       id,
//     };
//     res.status(200).send({ data });
//   } catch (error) {
//     console.log(error);
//   }
// };
