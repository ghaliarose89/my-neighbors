const router = require("express").Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require("./comment-routes");
const eventRoutes = require("./event-routes");
const neighbourhoodRoutes = require("./neighbourhood-routes");
//const likedPostRouters = require ('./')
router.use("/users", userRoutes);
router.use("/posts", postRoutes);
router.use("/comments", commentRoutes);
router.use("/events", eventRoutes);
router.use("/neighbourhoods", neighbourhoodRoutes);
module.exports = router;
