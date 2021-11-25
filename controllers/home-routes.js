const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Event } = require("../models");

router.get("/", (req, res) => {
	res.render("homepage");
});
router.get("/signup", (req, res) => {
	res.render("signup");
});

module.exports = router;
