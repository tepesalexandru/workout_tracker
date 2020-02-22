/// Core File for the Electron Window Functions

// External Imports
let { mainWindow, BrowserWindow } = require("../variables");
let { url, path } = require("../packages");

function createWindow() {
  console.log(require.main.filename);
  mainWindow = new BrowserWindow({
    show: false
  });
  mainWindow.loadURL(
    url.format({
      pathname: path.join(process.cwd(), "index.html"),
      protocol: "file",
      slashes: true
    })
  );

  mainWindow.on("ready-to-show", () => {
    mainWindow.removeMenu();
    mainWindow.show();
  });

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

module.exports = {
  createWindow
};
