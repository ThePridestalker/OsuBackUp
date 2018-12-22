const fs = require('fs');
const https = require('https');
const readLine = require('readline');
const exePath = process.env.PORTABLE_EXECUTABLE_DIR;
const { dialog } = require('electron').remote;

function download(item) {
  return new Promise((resolve) => {
    https.get(item.link, (response) => {
      const file = fs.createWriteStream(`${exePath}/DownloadedBeatmaps/${item.name}.osz`);
      response.pipe(file).on('finish', () => {
        console.log(`file ${item.name} downloaded.`);
        file.end();
        resolve();
      });
    });
  });
}

async function downloadBeatmap(queue) {
  for (let i = 0; i < queue.length; i++) {
    const item = queue[i];
    console.log(`downloading ${item.name}: link ${item.link}...`);
    await download(item);
  }
}

function downloadBeatmaps() {
  const queue = [];
  const message = document.getElementById('message');

  if (fs.existsSync(`${exePath}/BackUp/downloadList.txt`)) {
    message.textContent = 'Your beatmaps are being downloaded into the DownloadedBeatmaps folder!';

    var dir = `${exePath}/DownloadedBeatmaps`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const rl = readLine.createInterface({
      input: fs.createReadStream(`${exePath}/BackUp/downloadList.txt`),
    });

    rl.on('line', (line) => {
      const downloadName = line.slice(0, line.indexOf(':'));
      const downloadLink = line.slice(line.indexOf(':'), line.length).replace(': ', '');
      queue.push({ name: downloadName, link: downloadLink });
    });

    rl.on('close', () => downloadBeatmap(queue));
  } else {
    message.textContent = "Your downloadList.txt doesn't exist!";
  }
}

function makeBackUp() {
  const osuDir = document.getElementById('osuDir').value;
  const message = document.getElementById('message');

  if (fs.existsSync(`${osuDir}/Songs`)) {
    message.textContent = 'Everything seems good! /BackUp/downloadList.txt has been created!';

    let downloadList = '';
    fs.readdirSync(`${osuDir}/Songs`).forEach((file) => {
      const code = file.slice(0, file.indexOf(' '));
      const name = file.slice(file.indexOf(' '), file.length).replace(' ', '');

      const downloadUrl = `https://storage.ripple.moe/d/${code}\r\n`;

      downloadList += `${code} ${name}: ${downloadUrl}`;
    });

    var dir = `${exePath}/BackUp`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      fs.writeFileSync(`${dir}/downloadList.txt`, downloadList, 'utf8');
    }
  } else {
    message.textContent = 'You wrote the directory wrong!';
  }
}


function findFile() {
  const folderDir = document.getElementById('osuDir');
  var path = dialog.showOpenDialog({
    properties: ['openDirectory']
  });

  if (typeof(path) === "undefined") {
    path = "";
  } else {
    folderDir.value = path;
  }

}