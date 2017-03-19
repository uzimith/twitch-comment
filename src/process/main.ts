import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS } from 'electron-devtools-installer';

installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));
installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

declare var __dirname;
declare var process;

const DEBUG = true;
let mainWindow = null;
let opened = true;

app.on('ready', () => {
    globalShortcut.register('CommandOrControl+`', () => {
        if (opened) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
        opened = !opened;
    });

    if (DEBUG) {
        mainWindow = new BrowserWindow({
            x: -800,
            y: 0,
            width: 600,
            height: 400,
            resizable: true,
            transparent: true,
            frame: false,
            skipTaskbar: true,
        });
        mainWindow.webContents.openDevTools();
    } else {
        mainWindow = new BrowserWindow({
            width: 600,
            height: 400,
            resizable: true,
            focusable: false,
        });
    }

    mainWindow.setAlwaysOnTop(true);
    mainWindow.setSkipTaskbar(true);
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
