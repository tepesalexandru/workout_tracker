/// Core Electron file

const electron = require("electron");
const path = require("path");
const url = require("url");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

function createWindow() {
  win = new BrowserWindow({
    show: false
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true
    })
  );

  win.on("ready-to-show", () => {
    win.removeMenu();
    win.show();
  });

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
