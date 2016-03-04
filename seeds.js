var mongoose = require('mongoose');
var User = require('./models/user'),
    Thread = require('./models/Thread');
mongoose.connect('mongodb://localhost/blubber_app');


Thread.remove({}, function(err, results) {
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
    ], function(err, users) {
      if (err) {
        console.log(err);
      } else {
        console.log(users[0]._id);
        Thread.create({name: "Keith is the true iceman", creator: users[0]._id}, function(err, thread) {
          if (err) {
            console.log(err);
          } else {
            console.log(thread);
          }
          mongoose.connection.close();
        })
        console.log(users)
      }
    });
  });
});
