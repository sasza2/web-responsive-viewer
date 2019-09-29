import path from 'path'
import isDev from 'electron-is-dev'
import electron from 'electron'

const {app} = electron
const {BrowserWindow} = electron
const {webContents} = electron

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
  mainWindow.webContents.openDevTools()
  mainWindow.maximize()
  mainWindow.show()
}

const infoToWebview = (payload) => {
  const webContentInstances = webContents.getAllWebContents()

  webContentInstances.forEach(webContent => {
    webContent.send('action', payload)
  })
}

global.receiveMessage = (payload) => {
  infoToWebview(payload)
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
