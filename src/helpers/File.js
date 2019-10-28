const fs = require('fs')

const read = (path) => {
  return fs.readFileSync(path, 'utf8')
}

const write = (path, content) => {
  fs.writeFileSync(path, content)
}

const File = {
  read,
  write,
}

export default File
