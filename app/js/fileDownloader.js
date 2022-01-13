const fs = require("fs");
const readLine = require("readline");
// const exePath = process.env.PORTABLE_EXECUTABLE_DIR; ALWAYS WAS DEPRECATED, ONLY USED FOR DEBUGGING ON RUNTIME!
const exePath = process.cwd();

function readBackup() {
  let queue = [];
  const message = document.getElementById("message");

  if (fs.existsSync(`${exePath}/BackUp/downloadList.txt`)) {
    message.textContent =
      "Your beatmaps are being downloaded into the DownloadedBeatmaps folder!";

    var dir = `${exePath}/DownloadedBeatmaps`;
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }

    const rl = readLine.createInterface({
      input: fs.createReadStream(`${exePath}/BackUp/downloadList.txt`),
    });

    rl.on("line", (line) => {
      let downloadName = line.slice(0, line.indexOf(":"));
      let downloadLink = line
        .slice(line.indexOf(":"), line.length)
        .replace(": ", "");
      queue.push({ name: downloadName, link: downloadLink });
    });

    rl.on("close", () => downloadBeatmap(queue));
  } else {
    message.textContent = "Your downloadList.txt doesn't exist!";
  }
}

async function downloadBeatmap(queue) {
  //   for (let i = 0; i < queue.length; i++) {
  //     download(queue[i]);
  //     await sleep(1);
  //   }

  for (let i = 0; i < queue.length; i = i + 5) {
    for (let y = 0; y < 4; y++) {
      download(queue[i + y]);
      await sleep(1);
    }
    await download(queue[i + 5]);
    await sleep(3);
  }
}

function download(item) {
  return new Promise((resolve) => {
    https.get(item.link, (response) => {
      let file = fs.createWriteStream(
        `${exePath}/DownloadedBeatmaps/${item.name}.osz`
      );
      response.pipe(file).on("finish", () => {
        console.log(`file ${item.name} downloaded.`);
        file.end();
        resolve();
      });
    });
  });
}

function sleep(s) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 1000 * s);
  });
}

module.exports = { readBackup };
