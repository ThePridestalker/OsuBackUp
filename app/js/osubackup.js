const fs = require("fs");
const https = require("https");
const readLine = require("readline");
// const exePath = process.env.PORTABLE_EXECUTABLE_DIR; ALWAYS WAS DEPRECATED, ONLY USED FOR DEBUGGING ON RUNTIME!
const exePath = process.cwd();
const { dialog } = require("electron");
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
