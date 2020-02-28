/// Core Passport File

const { p_local, mongoose, bcryrpt } = require("../electron/packages");
const LocalStrategy = p_local.Strategy;

// Load User Model
const User = require("../database/models/User");

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: "email" }, (email, password, done) => {})
  );
};
