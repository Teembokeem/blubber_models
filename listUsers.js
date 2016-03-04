var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app');

var User   = require('./models/user');

// Thread.find({}, function(err, threads) {
//   console.log(threads);
// });

User.find({}, function(err, users) {
  if (err) console.log(err);
  console.log(users);
  mongoose.connection.close();
});
