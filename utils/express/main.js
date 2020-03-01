/// Core ExpressJS file

// Packages required
const { express, passport } = require("../electron/packages");

// Initialize express instance
const expressApp = express();

// Passport Config
require("../config/passport")(passport);

// Port listening to
expressApp.listen(3000);

module.exports = {
  expressApp
};

// Config Middleware
require("./middleware/main");
