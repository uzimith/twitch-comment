import { app, BrowserWindow, globalShortcut } from 'electron';
import electronOauth2 from 'electron-oauth2';

var config = {
    clientId: '',
    clientSecret: '',
    authorizationUrl: 'https://api.twitch.tv/kraken/oauth2/authorize',
    tokenUrl: 'https://api.twitch.tv/kraken/oauth2/token',
    useBasicAuthorizationHeader: false,
    redirectUri: 'http://localhost'
};

const DEBUG = true;
let mainWindow = null;
let opened = true;

app.on('ready', () => {
    globalShortcut.register('CommandOrControl+`', () => {
        if(opened) {
            mainWindow.hide();
        } else {
            mainWindow.show();
        }
        opened = !opened;
    });

    if(DEBUG) {
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
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    const options = {
        scope: 'chat_login',
    };

    const oauth = electronOauth2(config, {
        alwaysOnTop: true,
        autoHideMenuBar: true,
    });

    oauth.getAccessToken(options)
    .then(token => {
        console.log(token);
    });
});

app.on('window-all-closed', () => {
    if (process.platform != 'darwin') {
        app.quit();
    }
});
