# ![alt text](https://i.nuuls.com/qOE_2.png) OsuBackUp
OsuBackUp is an app designed to backup and then download automatically all your osu! songs when needed.

## The interface

<p align="center"> 
<img src="https://i.nuuls.com/q90TO.png">
</p>

There are 2 ways to use it:
1. For making the backup (a .txt file) and using it to download the beatmaps in another pc or after reinstalling.
2. To share your entire beatmap list to your friends (especially if they are new and have barely no maps at all).

## BackUp usage
First of all, insert your path in the input field.
The default osu! folder path is written there by default in case you dont know where it is.
The file explorer will open and you just have to choose the osu! folder.

1. After selecting the osu! folder path, click **Generate Backup List**. A folder called **BackUp** will be created and inside of it, the **downloadList.txt** (<u>this is the file you save</u>).
2. Whenever you want to download the songs from the backup file, click **Download From Backup**. A folder called **DownloadedBeatmaps** will appear and the beatmaps will be downloaded 1 by 1 there so dont worry about your bandwidth.
3. Once they all get downloaded, just import them as you want, dragging them all into osu! or one by one, whichever your pc can handle.

## Sharing beatmaps usage
This one is a bit tricky since its not the main usage of this tool, but you can still do it so here it goes how:

1. First, you have to select your osu! folder in the input field and then click on **Generate Backup List**. The file **downloadList.txt** gets created inside of the folder **BackUp**.
2. Tell your friends to download this app and also send them your file **downloadList.txt**.
3. The app only downloads the beatmaps if they are in the folder **BackUp**, so they have to manually create the folder (or do step 1 and replace their **downloadList.txt** with yours).
4. Your friends now click **Download From Backup** and the beatmaps will appear inside a folder called **DownloadedBeatmaps**.