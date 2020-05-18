const fs = require("fs");
const exePath = process.env.PORTABLE_EXECUTABLE_DIR;

function makeBackUp() {
  const osuDir = document.getElementById("osuDir").value;
  const message = document.getElementById("message");

  if (fs.existsSync(`${osuDir}/Songs`)) {
    let downloadList = "";
    fs.readdirSync(`${osuDir}/Songs`).forEach((file) => {
      const code = file.slice(0, file.indexOf(" "));
      const name = file.slice(file.indexOf(" "), file.length).replace(" ", "");

      const downloadUrl = `https://storage.ripple.moe/d/${code}\r\n`;

      downloadList += `${code} ${name}: ${downloadUrl}`;
    });

    var dir = `${exePath}/BackUp`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      fs.writeFileSync(`${dir}/downloadList.txt`, downloadList, "utf8");
    }

    message.textContent =
      "Everything seems good! /BackUp/downloadList.txt has been created!";
  } else {
    message.textContent = "You wrote the directory wrong!";
  }
}

module.exports = { makeBackUp };
