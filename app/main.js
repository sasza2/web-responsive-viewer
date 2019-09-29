import path from 'path'
import isDev from 'electron-is-dev'
import electron from 'electron'

const app = electron.app
const BrowserWindow = electron.BrowserWindow

const Store = require('electron-store');
const store = new Store();

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    show: false,
    webPreferences: {
      webSecurity: false, 
      webviewTag: true
    },
    toolbar: false,
  })
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  mainWindow.setMenuBarVisibility(false)
  // mainWindow.webContents.openDevTools()
  mainWindow.on('closed', () => mainWindow = null)
  mainWindow.maximize()
  mainWindow.show()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})