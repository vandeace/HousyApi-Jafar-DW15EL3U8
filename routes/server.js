const express = require('express');
const router = express.Router();
const { login, register } = require('../controllers/auth');

//Middleware

const { authenticated } = require('../middlewares/auth');

//auth routes

router.post('/signin', login);
router.post('/signup', register);

module.exports = router;

// const { index, create, show, update, destroy } = require('../controllers/user');

// router.route('/').get(index).post(create);

// router.route('/:id').get(show).patch(update).delete(destroy);

// router.route('/').get(index);
// const { index, create, show, update, destroy } = require('../controllers/user');
// router.route('/').get(index).post(create);

// router.route('/:id').get(show).patch(update).delete(destroy);
