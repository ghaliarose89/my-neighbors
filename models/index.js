const Comment = require("./Comment");
const Event = require("./Event");
const Post = require("./Post");
const User = require("./User");
const Neighbourhood = require("./Neighborhood");
const LikedPosts = require ('./LikedPosts');

//assotiations
User.hasMany(Post, {
    foreignKey: 'user_id'
  });
  
Post.belongsTo(User, {
    foreignKey: 'user_id',
  });

User.belongsToMany(Post,{
  through:'LikedPosts',
  foreignKey:'user_id'
})
Post.belongsToMany(User,
 { through:'LikedPosts',
  foreignKey:'post_id'
})








module.exports = { Comment, Event, Post, User, Neighbourhood , LikedPosts };
