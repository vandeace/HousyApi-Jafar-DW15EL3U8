const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/auth');
const {
  create: createHouse,
  index: showAllHouse,
  show: showHouseById,
  destroy: deleteHouse,
  update: updateHouse,
} = require('../controllers/house');
const {
  show: showUser,
  update: updateUser,
  destroy: deleteUser,
} = require('../controllers/user');

const { protected } = require('../middlewares/auth');
//========USER ACTION=======================
router.post('/login', login);
router.post('/register', register);
router.get('/user/:id', protected, showUser);
router.patch('/user/:id', protected, updateUser);
router.delete('/user/:id', protected, deleteUser);

//========HOUSE ACTION=======================
router.get('/houses', showAllHouse);
router.get('/house/:id', showHouseById);

router.delete('/house/:id', protected, deleteHouse);
router.post('/house', protected, createHouse);
router.patch('/house/:id', protected, updateHouse);

module.exports = router;
