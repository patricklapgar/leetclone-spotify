// const { app, BrowserWindow } = require('electron');
import { app, BrowserWindow } from 'electron';
const path = require('path');

const createWindow = (): void => {
    let window = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    window.loadFile('index.html');

    // Toggle DevTools
    // window.webContents.openDevTools()
}


app.on('ready', createWindow);