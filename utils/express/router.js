/// Core file for routes

const { expressApp } = require("./main");
const { express } = require("../electron/packages");
const { dir } = require("../../index");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/goals", (req, res) => {
  res.render("goals.ejs");
});

router.get("/stats", (req, res) => {
  res.render("stats.ejs");
});

router.get("/login", (req, res) => {
  res.render("login.ejs");
});

module.exports = {
  router
};

require("./auth");
