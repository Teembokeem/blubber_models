var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app');

var User   = require('./models/user'),
    Thread = require('./models/Thread');

Thread.find({}, function(err, threads) {
  if (err) console.log(err);

  threads.forEach(function(thread) {
    console.log(thread)
  })
  mongoose.connection.close();
});
