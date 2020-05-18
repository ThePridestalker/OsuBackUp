const fs = require("fs");
const https = require("https");
const readLine = require("readline");
const exePath = process.env.PORTABLE_EXECUTABLE_DIR;
const { dialog } = require("electron").remote;
const backupGen = require("./js/backupGen");
const fileDownloader = require("./js/fileDownloader");

function findFile() {
  const folderDir = document.getElementById("osuDir");
  var path = dialog.showOpenDialog({
    properties: ["openDirectory"],
  });

  if (typeof path === "undefined") {
    path = "";
  } else {
    folderDir.value = path;
  }
}
