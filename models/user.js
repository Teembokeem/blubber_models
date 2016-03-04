var mongoose = require('mongoose');

//SCHEMA
var userSchema = new mongoose.Schema({
  name:     {type: String, required: true},
  email:    {type: String, required: true},
  // password: String,
  mod:      {type: Boolean, default: false},
  // threads:  [{type: mongoose.Schema.Types.ObjectId, ref: 'Thread'}]
});

//MODEL
var User = mongoose.model("User", userSchema);

module.exports = User;






