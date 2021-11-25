const Comment = require("./Comment");
const Event = require("./Event");
const Post = require("./Post");
const User = require("./User");
const Neighbourhood = require("./Neighbourhood");
const LikedPosts = require ('./LikedPosts');

//assotiations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });








module.exports = { Comment, Event, Post, User, Neighbourhood , LikedPosts };
