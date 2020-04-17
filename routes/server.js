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

module.exports = router;
