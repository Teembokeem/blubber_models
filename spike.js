var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app');

var User   = require('./models/user'),
    Thread = require('./models/Thread');

// Thread.find({}, function(err, threads) {
//   console.log(threads);
// });

Thread.find({}, function(err, thread) {
  if (err) console.log(err);
  console.log(thread);
  mongoose.connection.close();

//   User.findById(thread.creator, function(err, user) {
//     console.log(user);
//   })
})

// Thread.find({}).populate("creator").exec(function(err, thread) {
//   console.log(thread);
// });
