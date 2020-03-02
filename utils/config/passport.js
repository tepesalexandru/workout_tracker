/// Core Passport File

const { p_local, mongoose, bcryrpt } = require("../electron/packages");
const LocalStrategy = p_local.Strategy;

/*// Load User Model
const User = require("../database/models/User");*/

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    const user = await getUserByEmail(email);
    if (user == null) {
      console.log("No user with that email");
      return done(null, false, { message: "No user with that email" });
    }

    try {
      if (await bcryrpt.compare(password, user.password)) {
        console.log("User logged in!");
        return done(null, user);
      } else {
        console.log("Password incorrect");
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      return done(e);
    }
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, authenticateUser));
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => done(null, getUserById(id)));
}

module.exports = initialize;

/*module.exports = function(passport) {
  console.log("helloo");
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
      // Search if User already exists
      User.findOne({
        email: email
      }).then(user => {
        if (!user) {
          // User doesn't exist
          console.log("User doesn't exist!");
          return done(null, false);
        } else {
          // User exists
          console.log("User exists...");
          // Match password
          bcryrpt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              // Password is correct
              console.log("You're logged in!");
              return done(null, user);
            } else {
              // Password is incorrect
              console.log("password incorrect");
              return done(null, false);
            }
          });
        }
      });
    })
  );

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
*/
