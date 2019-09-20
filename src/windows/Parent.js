const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow;

function Parent(electron) {
  const createWindow = () => {
    const BrowserWindow = electron.BrowserWindow
    mainWindow = new BrowserWindow({width: 900, height: 680, webPreferences: { webSecurity: false,  webviewTag: true }});
    mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
    //mainWindow.webContents.openDevTools()
    mainWindow.on('closed', () => mainWindow = null);
  }

  electron.app.on('ready', createWindow);

  electron.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      electron.app.quit();
    }
  })

  electron.app.on('activate', () => {
    if (mainWindow === null) {
      createWindow();
    }
  })
}

module.exports = Parent
