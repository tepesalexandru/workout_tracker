/// Core File to hold all Electron related variables

// External imports
const { electron } = require("./packages");

// The main window that opens at the start
let mainWindow;

// The electron app that handles everything
const app = electron.app;

// Function to create a new browser window
const BrowserWindow = electron.BrowserWindow;

module.exports = {
  mainWindow,
  app,
  BrowserWindow
};
