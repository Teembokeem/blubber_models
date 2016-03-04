var mongoose = require('mongoose');

//SCHEMA
var threadSchema = new mongoose.Schema({
name: {type: String, required: true},
creator: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
creatorName: String
})

//MODEL
var Thread = mongoose.model("Thread", threadSchema)
//EXPORT
module.exports = Thread;
