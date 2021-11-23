const router = require('express').Router();
const Post = require('../../models/Post');

// get all users
router.get('/', (req, res) => {
    User.findAll({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });