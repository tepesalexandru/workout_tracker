/// Core Passport File

const { p_local, mongoose, bcryrpt } = require("../electron/packages");
const LocalStrategy = p_local.Strategy;

// Load User Model
const User = require("../database/models/User");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Search if User already exists
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          // User doesn't exist
        } else {
          // User exists
        }
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(mull, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(user, user);
    });
  });
};
