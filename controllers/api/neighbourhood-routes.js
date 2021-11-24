const router = require("express").Router();
const { Neighbourhood } = require("../../models");

router.get("/", (req, res) => {
	Neighbourhood.findAll()
		.then((dbResultData) => res.json(dbResultData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
router.get("/:id", (req, res) => {
	Neighbourhood.findOne({
		where: {
			id: req.params.id,
		},
	})
		.then((dbResultData) => res.json(dbResultData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post("/", (req, res) => {
	// expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
	Neighbourhood.create({
		neighbourhood_name: neighbourhood_name,
		zip1: req.body.zip1,
		zip2: req.body.zip2,
	})
		.then((dbResultData) => res.json(dbResultData))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

router.put("/:id", (req, res) => {
	Neighbourhood.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbResultData) => {
			if (!dbResultData) {
				res.status(400).json({ message: "Requested comment not found" });
				return;
			}
			res.json(dbResultData);
		})
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

router.delete("/:id", (req, res) => {
	Neighbourhood.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbResultData) => {
			if (!dbResultData) {
				res.status(404).json({ message: "No comment found with this id!" });
				return;
			}
			res.json(dbResultData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
