const Comment = require("./Comment");
const Event = require("./Event");
const Post = require("./Post");
const User = require("./User");
const Neighbourhood = require("./Neighborhood");
const LikedPosts = require ('./LikedPosts');

//User can write many posts
User.hasMany(Post, {
  model: User,
  
})
module.exports = { Comment, Event, Post, User, Neighbourhood , LikedPosts };
