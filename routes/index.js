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
const {
  create: makeOrder,
  show: showOrderById,
  index: showAllOrders,
  update: updateOrder,
  destroy: deleteOrder,
} = require('../controllers/order');

//========MIDDLEWARE=======================
const { protected } = require('../middlewares/auth');

//========USER ACTION=======================
router.post('/login', login);
router.post('/register', register);
router.get('/user', protected, showUser);
router.patch('/user', protected, updateUser);
router.delete('/user', protected, deleteUser);

//========HOUSE ACTION=======================
router.get('/houses', showAllHouse);
router.get('/house/:id', showHouseById);

router.post('/house', protected, createHouse);
router.patch('/house/:id', protected, updateHouse);
router.delete('/house/:id', protected, deleteHouse);

//========ORDERS ACTION=======================
router.get('/order/:id', protected, showOrderById);
router.get('/orders', protected, showAllOrders);

router.post('/transaction', protected, makeOrder);
router.patch('/order/:id', protected, updateOrder);
router.delete('/order/:id', protected, deleteOrder);

module.exports = router;
