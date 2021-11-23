const router = require("express").Router();

// const userRoutes = require('./user-routes.js');
// const postRoutes = require('./post-routes');
const commentRoutes = require("./comment-routes");
const eventRoutes = require("./event-routes");
// router.use('/users', userRoutes);
// router.use('/posts', postRoutes);
//router.use("/comments", commentRoutes);
router.use("/events", eventRoutes);

module.exports = router;
