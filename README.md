# ![alt text](https://i.nuuls.com/qOE_2.png) OsuBackUp
OsuBackUp is an app designed to backup and then download automatically all your osu! songs when needed. It uses [Ripple](https://ripple.moe/) server to download the beatmaps without limits.

## The interface

<p align="center"> 
<img src="https://i.nuuls.com/q90TO.png">
</p>

There are 2 ways to use it:
- 1. For making the backup (a .txt file) and using it to download the beatmaps in another pc or after reinstalling.
- 2. To share your entire beatmap list to your friends (especially if they are new and have barely no maps at all).

## BackUp usage
First of all, insert your path in the input field.
The default osu! folder path is written there by default in case you dont know where it is.
The file explorer will open and you just have to choose the osu! folder.

- 1. After selecting the osu! folder path, click **Generate Backup List**. A folder called **BackUp** will be created and inside of it, the **downloadList.txt** (<u>this is the file you save</u>).
- 2. Whenever you want to download the songs from the backup file, click **Download From Backup**. A folder called **DownloadedBeatmaps** will appear and the beatmaps will be downloaded 1 by 1 there so dont worry about your bandwidth.
- 3. Once they all get downloaded, just import them as you want, dragging them all into osu! or one by one, whichever your pc can handle.

## Sharing beatmaps usage
This one is a bit tricky since its not the main usage of this tool, but you can still do it so here it goes how:

- 1. First, you have to select your osu! folder in the input field and then click on **Generate Backup List**. The file **downloadList.txt** gets created inside of the folder **BackUp**.
- 2. Tell your friends to download this app and also send them your file **downloadList.txt**.
- 3. The app only downloads the beatmaps if they are in the folder **BackUp**, so they have to manually create the folder (or do step 1 and replace their **downloadList.txt** with yours).
- 4. Your friends now click **Download From Backup** and the beatmaps will appear inside a folder called **DownloadedBeatmaps**.

## Building from source
**Keep in mind that, compiling is a hard CPU task, time and CPU usage goes with your setup, be aware when compiling using other apps, and make sure to have 1G of free memory.**
### Windows
- install dependecies to compile/run the project.: [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) & [git](https://git-scm.com/download/win)

- Open CMD using <kbd>Win</kbd> + <kbd>R</kbd> and typing 'cmd', or through Windows Search.

- Go to your Downloads folder using the 'cd' command, and then run: `git clone https://github.com/ThePridestalker/OsuBackUp.git`. After it finishes, `cd OsuBackUp`

- Install project's dependencies using `npm install`

- Compile the project using `npm run dist`

### Linux (Debian & Ubuntu-based distros)
- Open terminal with <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>

- install package dependencies with 
  ```sudo apt install npm git```

- go to your Downloads folder and run: 
  ```git clone https://github.com/ThePridestalker/OsuBackUp.git && cd OsuBackUp```

- install project dependencies with: 
  ```npm install```

For compiling you have two options, you can either optimize the **electron-builder** command to fit your needs yourself, or compile using the default and more compatible way, running `npm run deps && npm run linux-compile`, which install **only needed additional packages** and compiles for **i386-pc and x86_64 builds**. Don't forget that the **.AppImage** file is what we want to run, so we don't need to install the *debian* package and remove every time we compile. Install by your own if you're happy with the results!

If compiling does not work for your for some reason, verify your kernel version and architecture. if still isn't clear, [report an issue](https://github.com/ThePridestalker/OsuBackUp/issues)

### Linux (Arch-based distros)
- Open the terminal with <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>T</kbd>
  
- install package dependencies with 
  ```sudo pacman -Syu npm git zenity kdialog xdialog```
  
- Go to your Downloads folder and run: 
  ```git clone https://github.com/ThePridestalker/OsuBackUp.git && cd OsuBackUp```
  
- install project dependencies with 
  ```npm install```
  
For compiling you have two options, you can either optimize the **electron-builder** command to fit your needs yourself, or compile using the default and more compatible way, running `npm run deps && npm run linux-compile`, which install **only needed additional packages** and compiles for **i386-pc (32 & 64 bits)**. Don't forget that the **.AppImage** file is what we want to run. Install if you're happy with the results!