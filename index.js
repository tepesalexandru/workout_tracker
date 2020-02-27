/// Core Electron file

// Import Packages
const { electron, path, url, express } = require("./utils/electron/packages");

// External Scripts Required
let { mainWindow, app, BrowserWindow } = require("./utils/electron/variables");

let { createWindow } = require("./utils/electron/window/functions");

const dir = __dirname;

/// Start the app
app.on("ready", createWindow);

// Linux requirements for electron
require("./utils/electron/window/linux");

// Boot database connection
require("./utils/database/mongo");

module.exports = {
  dir
};

// Start the express server
require("./utils/express/main");
