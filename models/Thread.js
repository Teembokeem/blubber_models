var mongoose = require('mongoose');

//SCHEMA


//Comments Schema
var commentSchema = new mongoose.Schema({
  author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
          },
  body:   { type: String, required: true},
  upvotes:{ type: Number, default: 0},
  comments: [this]
})
//Post Schema
var postSchema = new mongoose.Schema({
  author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
          },
  title:  { type: String, required: true},
  body:   { type: String, required: true},
  upvotes:{ type: Number, default: 0},
  comments: [commentSchema]
});


//Thread Schema
var threadSchema = new mongoose.Schema({
    name:    {type: String, required: true},
    creator: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'User'
             },
    creatorName: String,
    posts:   [postSchema]
});

//MODEL
var Thread = mongoose.model("Thread", threadSchema)
//EXPORT
module.exports = Thread;
