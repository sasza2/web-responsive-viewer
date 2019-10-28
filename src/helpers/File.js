const fs = require('fs')

const absolutePath = (name) => `${process.env.REACT_APP_PATH}/store/${name}`

const read = (name) => fs.readFileSync(absolutePath(name), 'utf8')

const write = (name, content) => {
  fs.writeFileSync(absolutePath(name), content)
}

const File = {
  read,
  write,
}

export default File
