const router = require("express").Router();

const Event = require("../../models/Event");
const { Op } = require("sequelize");

//GET all events
router.get("/", (req, res) => {
	Event.findAll({
		// where: {
		// 	event_end_date: {
		// 		[Op.gt]: new Date(),
		// 	},
		// },
	})
		.then((dbResult) => {
			res.json(dbResult);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//GET All current and future events
router.get("/future", (req, res) => {
	Event.findAll({
		where: {
			event_end_date: {
				[Op.gt]: new Date(),
			},
		},
	})
		.then((dbResult) => {
			res.json(dbResult);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
//GET old events
router.get("/prev", (req, res) => {
	Event.findAll({
		where: {
			event_end_date: {
				[Op.lt]: new Date(),
			},
		},
	})
		.then((dbResult) => {
			res.json(dbResult);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// /api/events/3
router.get("/:id", (req, res) => {
	Event.findAll({
		where: {
			id: req.params.id,
		},
	})
		.then((dbResult) => {
			if (!dbResult) {
				res.status(400).json({ message: "requested event is not found" });
				return;
			}
			res.json(dbResult);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//POST create new event

router.post("/", (req, res) => {
	Event.create({
		event_title: req.body.event_title,
		event_details: req.body.event_details,
		event_start_date: req.body.event_start_date,
		event_end_date: req.body.event_end_date,
		user_id: req.body.user_id,
	})
		.then((dbResult) => {
			res.json(dbResult);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

//PUT update the event
router.put("/:id", (req, res) => {
	Event.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbResult) => {
			if (!dbResult) {
				res.status(400).json({ message: "requested event is not found" });
				return;
			}
			res.json(dbResult);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;