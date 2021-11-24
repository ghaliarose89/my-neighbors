const router = require('express').Router();
const Post = require('../../models/Post');
const User = require('../../models/User');

// get all posts with post owner
router.get('/', (req, res) => {
    Post.findAll({
        // include: [
        //     {
        //         model: User,
        //         attributes: ['first_name', 'last_name'],
        //     }
        // ]
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/:id', (req, res) => {
    // find one post by its `id` value

    Post.findOne({
        where:
        {
            id: req.params.id
        },
        include: [{
            model: User,
            attributes: ['first_name', 'last_name'],
        }],
    })
        .then(dbUserData => {
            if (!dbUserData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;

            }
            res.json(dbUserData)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    // create a new post
    Post.create({
        id: req.body.id,
        title: req.body.title,
        post_details: req.body.post_details,
        user_id: req.session.user_id
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});


router.put('/:id', (req, res) => {
    //update a post expected 
    // {title:
    // post_details:}

    Post.update(
        {
            title: req.body.title,
            post_details:req.body.post_details
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id' });
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.delete('/:id', (req, res) => {
    //delete post by ID
    console.log('id', req.params.id);
    Post.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;