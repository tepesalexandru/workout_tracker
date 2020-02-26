/// Core ExpressJS file

const { express } = require("../electron/packages");
const { dir } = require("../../index");

const expressApp = express();

expressApp.listen(3000);

expressApp.use(express.static(dir));

const { router } = require("./router");

expressApp.use("/", router);

module.exports = {
  expressApp
};
