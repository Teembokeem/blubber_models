var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app');

//SCHEMA
var userSchema = new mongoose.Schema({
  name:     {type: String, required: true},
  email:    {type: String, required: true},
  // password: String,
  mod:      {type: Boolean, default: false}
});



//MODEL
var User = mongoose.model("User", userSchema);

User.remove({}, function(err, results) {

  console.log("Creating Users...");
  console.log();
  console.log();
  User.create([
    {
      name: "John Marshall",
      email: "Marshall@email.gov",
      mod: false
    },
    {
      name: "Oliver Wendell Holmes Jr.",
      email: "wHolmesOliver@email.gov",
      mod: true
    },
    {
      name: "Thurgood Marshall",
      email: "tmc@email.gov",
      mod: true
    },
    {
      name: "Sandra Day O'Connor",
      email: "theDoC@email.gov",
      mod: false
    },
    ], function(err, results) {
      if (err) {
        console.log(err);
        mongoose.connection.close();
      } else {
        console.log(results)
        mongoose.connection.close();
      }
    });
  });








