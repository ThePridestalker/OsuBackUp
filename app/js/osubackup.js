const fs = require("fs");
const https = require("https");
const readLine = require("readline");
const process = require("process");
// const exePath = process.env.PORTABLE_EXECUTABLE_DIR; ALWAYS WAS DEPRECATED, ONLY USED FOR DEBUGGING ON RUNTIME!
const exePath = process.cwd();
const { dialog } = require("electron").remote;
const backupGen = require("./js/backupGen");
const fileDownloader = require("./js/fileDownloader");

// C:\Users\<Username>\AppData\Local\osu!
// /home/<Username>/.local/share/osu-wine/OSU
// process.platform === "win32"
// require("os").userInfo().username

window.addEventListener('load', () => { // at page load, detect the User's OS to change placeholder 
  if (process.platform != "win32" && process.platform == "linux" || process.platform == "freebsd") {
    document.getElementById("osuDir").placeholder = `/home/${require("os").userInfo().username}/.local/share/osu-wine/OSU`;
    
    // if running with root privileges, advise user from file system damage being remotly possible.
    if(process.getuid() == 0) {
      console.warn('\nWhen running as root, you are advised that no one tested it.\n')
    }
  }

  // if running with windows, change the <Username> thing to your actual username.
  if (process.platform == "win32") {
    document.getElementById("osuDir").placeholder = `C:\\Users\\${require('os').userInfo().username}\\AppData\\Local\\osu!`;
  }
})


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
