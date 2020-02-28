/// Core ExpressJS file

// Packages required
const {
  express,
  flash,
  session,
  passport,
  bparser
} = require("../electron/packages");
const { dir } = require("../../index");

const expressApp = express();

// Passport Config
require("../config/passport")(passport);

// Express Session
expressApp.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
);

// Connect Flash
expressApp.use(flash());

expressApp.listen(3000);

expressApp.use(express.static(dir));

expressApp.use(
  bparser.urlencoded({
    extended: false
  })
);

expressApp.use(bparser.json());

const { router } = require("./router");

expressApp.use("/", router);

module.exports = {
  expressApp
};
