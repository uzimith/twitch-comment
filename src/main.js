import { app, BrowserWindow } from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

const DEBUG = true;

app.on('ready', () => {
    if(DEBUG) {
        mainWindow = new BrowserWindow({
            width: 600,
            height: 400,
            resizable: false,
            transparent: true,
            frame: false,
        });
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow = new BrowserWindow({
            width: 600,
            height: 400,
            resizable: false
            });
    }
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
});
