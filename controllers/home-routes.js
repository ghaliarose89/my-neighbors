const router = require("express").Router();
const sequelize = require("../config/connection");
const Neighborhood = require("../models/Neighborhood");

router.get("/", (req, res) => {
	res.render("homepage");
});
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

module.exports = router;
