var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/blubber_app');

var User   = require('./models/user'),
    Thread = require('./models/Thread');

Thread.find({}, function(err, threads) {
  console.log(threads);
  mongoose.connection.close();
});


