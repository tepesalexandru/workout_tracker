/// Core file for routes

const { expressApp } = require("./main");
const { express } = require("../electron/packages");
const { dir } = require("../../index");

const router = express.Router();

router.get("/", (req, res) => {
  res.locals.title = "Home | Workout Tracker";
  res.render("index.ejs");
});

router.get("/goals", (req, res) => {
  res.locals.title = "Goals | Workout Tracker";
  res.render("goals.ejs");
});

router.get("/stats", (req, res) => {
  res.locals.title = "Stats | Workout Tracker";
  res.render("stats.ejs");
});

router.get("/login", (req, res) => {
  res.locals.title = "Login | Workout Tracker";
  res.render("login.ejs");
});

module.exports = {
  router
};

require("./auth");
