const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/auth');
const { index: allUsers, destroy: deleteUser } = require('../controllers/user');
const {
  index: showHouses,
  show: showOneHouse,
  create: createHouse,
  update: updateHouse,
  destroy: deleteHouse,
} = require('../controllers/house');
const {
  index: showAllOrders,
  show: showOneOrder,
  create: makeOrder,
  update: updateOrder,
} = require('../controllers/transaction');

//Middleware
const { authenticated } = require('../middlewares/auth');

//====ALL USERS ROUTER
//SHOW ALL USERS
router.get('/users', allUsers);
// //DELETE USER USING PARAMS ID
router.delete('/user/:id', authenticated, deleteUser);
// //LOGIN USERS
router.post('/signin', login);
// //REGISTER USERS
router.post('/signup', register);

//====ALL HOUSE ROUTE========
//SHOW ALL HOUSE
router.get('/houses', showHouses);
// //SHOW HOUSE BY PARAMS ID
router.get('/house/:id', showOneHouse);
// //CREATE HOUSE
router.post('/house', authenticated, createHouse);
/////UPDATE HOUSE//////
router.patch('/house/:id', authenticated, updateHouse);
/////DELETE HOUSE//////
router.delete('/house/:id', authenticated, deleteHouse);

///======ALL TRANSACTION ROUTE=======
////SHOW ALL TRANSACTION///////////
router.get('/orders', showAllOrders);
////SHOW TRANSACTION BY ID///////////
router.get('/order/:id', showOneOrder);
////CREATE NEW TRANSACTION ///////////
router.post('/transaction', authenticated, makeOrder);
////CREATE NEW TRANSACTION ///////////
router.patch('/order/:id', authenticated, updateOrder);
module.exports = router;
