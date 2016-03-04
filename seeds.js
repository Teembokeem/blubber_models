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
        // console.log(err);
      } else {

        var john = users[0];
        var thur = users[2];


        Thread.create({name: "Keith is the true iceman", creator: john, creatorName: john.name}, function(err, thread) {
          if (err) console.log(err);

          var yolo = thread;
          console.log("poops incoming");
          // console.log(thread);
          // console.log(yolo);
          yolo.posts.push(
            {
              author: john,
              title: "Marbury v Madison",
              body: "Ya digggg?"
            },
            {
              author: thur,
              title: "Brown v Board",
              body: "Right? Yeah."
            });

            yolo.save(function(err, results) {
              // console.log(results);

              var post = yolo.posts[0];
              console.log(post);

              post.comments.push(
                {
                  author: thur,
                  body: "i do dig bruh"
                });

                yolo.save(function(err, result) {
                 console.log(err)

                console.log(post.comments, post);
                mongoose.connection.close();
              })

          });

        })
        // console.log(users)
      }
    });
  });
});
