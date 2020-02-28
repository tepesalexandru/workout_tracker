/// Core ExpressJS file

const { express, flash, session } = require("../electron/packages");
const { dir } = require("../../index");

const expressApp = express();

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

const { router } = require("./router");

expressApp.use("/", router);

module.exports = {
  expressApp
};
