const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/auth');
const { index: allUsers, destroy: deleteUser } = require('../controllers/user');
const {
  index: showHouses,
  show: showOneHouse,
} = require('../controllers/house');
//Middleware

const { authenticated } = require('../middlewares/auth');

//auth routes

//====ALL USERS ROUTER
//SHOW ALL USERS
router.get('/users', allUsers);
//DELETE USER USING PARAMS ID
router.delete('/user/:id', deleteUser);
//LOGIN USERS
router.post('/signin', login);
//REGISTER USERS
router.post('/signup', register);
//SHOW ALL HOUSE
router.get('/houses', showHouses);
//SHOW HOUSE BY PARAMS ID
router.get('/house/:id', showOneHouse);

module.exports = router;

// const { index, create, show, update, destroy } = require('../controllers/user');

// router.route('/').get(index).post(create);

// router.route('/:id').get(show).patch(update).delete(destroy);

// router.route('/').get(index);
// const { index, create, show, update, destroy } = require('../controllers/user');
// router.route('/').get(index).post(create);

// router.route('/:id').get(show).patch(update).delete(destroy);
