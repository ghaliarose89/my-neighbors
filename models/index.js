const Comment = require("./Comment");
const Event = require("./Event");
const Post = require("./Post");
const User = require("./User");
const Neighborhood = require("./Neighborhood");
const LikedPosts = require("./LikedPosts");

//associations
User.hasMany(Post, {
	foreignKey: "user_id",
});

Post.belongsTo(User, {
	foreignKey: "user_id",
});

User.belongsToMany(Post, {
	through: "LikedPosts",
	foreignKey: "user_id",
});
Post.belongsToMany(User, { through: "LikedPosts", foreignKey: "post_id" });
LikedPosts.belongsTo(User, {
	foreignKey: "user_id",
	onDelete: "SET NULL",
});

LikedPosts.belongsTo(Post, {
	foreignKey: "post_id",
	onDelete: "SET NULL",
});

Comment.belongsTo(User, {
	foreignKey: "user_id",
});

Comment.belongsTo(Post, {
	foreignKey: "post_id",
});

User.hasMany(Comment, {
	foreignKey: "user_id",
});

Post.hasMany(Comment, {
	foreignKey: "post_id",
});

User.belongsTo(Neighborhood, {
	foreignKey: "neighborhood_id",
});

module.exports = { Comment, Event, Post, User, Neighborhood, LikedPosts };
