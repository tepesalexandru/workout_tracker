/// Core ExpressJS file

// Packages required
const { express, passport } = require("../electron/packages");
const User = require("../database/models/User");

// Initialize express instance
const expressApp = express();

const initializePassport = require("../config/passport");
initializePassport(
  passport,
  async email => {
    const userFound = await User.findOne({ email: email });
    return await userFound;
    User.findOne({ email: email })
      .then(user => {
        //if (err) return console.log("User not found by email");
        console.log("user found! " + user);
        return user;
      })
      .catch();
  },
  async id => {
    const userFound = await User.findOne({ id: id });
    return await userFound;
    User.findOne({ id: id })
      .then(user => {
        //if (err) return console.log("User not found by id");
        return user;
      })
      .catch();
  }
);

/*// Passport Config
require("../config/passport")(passport);*/

// Port listening to
expressApp.listen(3000);

module.exports = {
  expressApp
};

// Config Middleware
require("./middleware/main");
