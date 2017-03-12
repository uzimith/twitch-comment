import { app, BrowserWindow, globalShortcut, ipcMain } from "electron";

declare var __dirname;
declare var process;

const DEBUG = true;
let mainWindow = null;
let opened = true;

app.on("ready", () => {
    globalShortcut.register("CommandOrControl+`", () => {
        if (opened) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
        opened = !opened;
    });

    if (DEBUG) {
        mainWindow = new BrowserWindow({
            width: 600,
            height: 400,
            resizable: false,
            transparent: true,
            frame: false,
            focusable: false,
            skipTaskbar: true,
        });
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow = new BrowserWindow({
            width: 600,
            height: 400,
            resizable: false,
        });
    }

    mainWindow.setAlwaysOnTop(true);
    mainWindow.setSkipTaskbar(true);
    mainWindow.loadURL("file://" + __dirname + "/index.html");
    mainWindow.on("closed", () => {
        mainWindow = null;
    });

});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
