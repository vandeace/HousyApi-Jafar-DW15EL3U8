const { User } = require('../models');

exports.index = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send({ data: users });
  } catch (error) {
    console.log(error);
  }
};

exports.show = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};

exports.create = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};

exports.update = async (req, res) => {
  try {
    await User.update(req.body, { where: { id: req.params.id } });
    const user = await User.findOne({ where: { id: req.params.id } });
    res.send({ data: user });
  } catch (error) {
    console.log(error);
  }
};

exports.destroy = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    const users = await User.findAll();
    res.send({ data: users });
  } catch (error) {
    console.log(error);
  }
};
