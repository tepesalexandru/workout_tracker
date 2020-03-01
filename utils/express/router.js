/// Core file for routes

const { expressApp } = require("./main");
const { express } = require("../electron/packages");
const { dir } = require("../../index");

const router = express.Router();

// Router Middleware
router.use((req, res, next) => {
  // Nothing yet in here
  next();
});

router.get("/", (req, res) => {
  res.sendFile(`${dir}/index.html`);
});

router.get("/goals", (req, res) => {
  res.sendFile(`${dir}/public/pages/goals.html`);
});

router.get("/stats", (req, res) => {
  res.sendFile(`${dir}/public/pages/stats.html`);
});

router.get("/login", (req, res) => {
  res.sendFile(`${dir}/public/pages/login.html`);
});

module.exports = {
  router
};

require("./auth");
