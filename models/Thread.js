var mongoose = require('mongoose');

//SCHEMA
var threadSchema = new mongoose.Schema({
name: {type: String, required: true},
creator: mongoose.Schema.Types.ObjectId
})

//MODEL
var Thread = mongoose.model("Thread", threadSchema)
//EXPORT
module.exports = Thread;
