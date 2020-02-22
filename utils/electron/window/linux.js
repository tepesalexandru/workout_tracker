/// Extra settings for Linux

let { app, mainWindow } = require("../variables");
let { createWindow } = require("./functions");

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
