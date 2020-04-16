const jwt = require('jsonwebtoken');
const { User } = require('../models');

//make authentication
exports.authenticated = async (req, res, next) => {
  try {
    //first make token from req header
    let token = req.header('Authorization');
    if (token) {
      //if token get make it to string
      token = token.replace('Bearer', '');
      //verify token with secret key string
      const data = jwt.verify(token, 'this-is-my-secret-key');
      if (data) {
        //first search user is there user with id parameter
        const user = await User.findOne({ where: { id: data.id } });
        if (!user) {
          //if user not found send error message
          res.status(403).send({ message: 'Forbidden Request' });
        } else {
          //if user available send user id and token
          req.user = user.id;
          req.token = token;
          //then user next function to continue the request route
          next();
        }
      } else {
        res.status(403).send({ message: 'Forbidden Request!' });
      }
    } else {
      res.status(401).send({ message: "you're unauthorized" });
    }
  } catch (error) {}
};
