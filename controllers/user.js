const { User } = require('../models');

exports.show = async (req, res) => {
  try {
    if (req.params.id == req.user.id) {
      const users = await User.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      res.status(200).send({ data: users });
    } else {
      res.status(401).send({ message: 'you put the wrong id ' });
    }
  } catch (error) {
    res.status(500).send({ message: 'CANT FIND THE USER CHECK YOURE METHOD ' });
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    if (req.params.id == req.user.id) {
      await User.update(req.body, { where: { id: req.params.id } });
      const users = await User.findOne({
        where: { id: req.params.id },
        attributes: { exclude: ['createdAt', 'updatedAt'] },
      });
      res.status(200).send({ data: users });
    } else {
      res.status(401).send({ message: 'you put the wrong id ' });
    }
  } catch (error) {
    res
      .status(500)
      .send({ message: 'CANT UPDATE THE USER CHECK YOUR METHOD ' });
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    if (req.params.id == req.user.id) {
      await User.destroy({ where: { id: req.params.id } });
      const { id } = req.params;
      const data = {
        id,
      };
      res.status(200).send({ status: 'succes', data });
    } else {
      res.status(401).send({ message: 'you put the wrong id ' });
    }
  } catch (error) {
    console.log(error);
  }
};
