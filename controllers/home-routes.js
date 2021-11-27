const router = require("express").Router();
const sequelize = require("../config/connection");
const Neighborhood = require("../models/Neighborhood");
const {Post,User,Comment,Event } = require('../models');


// router.get("/", (req, res) => {
// 	res.render("homepage");
// });
router.get("/signup", (req, res) => {
	Neighborhood.findAll()
		.then((dbResultData) => {
			console.log("---------------------------------------------");
			//	console.log(res.json(dbResultData));
			//	const neighborhoods = dbResultData.map({ plain: true });
			//	const neighborhoods = dbResultData.map((n) => n.get({ plain: true }));
			const neighborhoods = dbResultData.map((n) => n.get({ plain: true }));
			res.render("signup", {
				neighborhoods,
			});
			return;
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
//getting all posts if the user loged in
router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'post_details',
        'title',
        'created_at',
        [sequelize.literal('(SELECT COUNT(*) FROM comment WHERE post.id = comment.post_id)'), 'comment_count']
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', ],
          include: {
            model: User,
            attributes: ['first_name']
          }
        },
        {
          model: User,
          attributes: ['first_name']
        }
      ]
    })
      .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        console.log(posts)
        res.render('homepage', {
          posts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

module.exports = router;
