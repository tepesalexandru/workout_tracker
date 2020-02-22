/// Core Electron file

// Import Packages
const { electron, path, url } = require("./utils/electron/packages");

// External Scripts Required
let { mainWindow, app, BrowserWindow } = require("./utils/electron/variables");

let { createWindow } = require("./utils/electron/window/functions");

/// Start the app
app.on("ready", createWindow);

require("./utils/electron/window/linux");
require("./utils/database/mongo");
