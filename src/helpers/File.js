import electron from 'electron'

const fs = require('fs')
const path = require('path')

const userSettingsPath = (name) => {
  const app = electron.app || electron.remote.app
  const userDataPath = app.getPath('userData')
  return path.join(userDataPath, name)
}

const read = (name) => fs.readFileSync(userSettingsPath(name), 'utf8')

const write = (name, content) => {
  fs.writeFileSync(userSettingsPath(name), content)
}

const File = {
  read,
  write,
}

export default File
