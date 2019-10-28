const fs = require('fs')

const absolutePath = (relativePath) => `${process.env.REACT_APP_PATH}/store/${relativePath}`

const read = (relativePath) => fs.readFileSync(absolutePath(relativePath), 'utf8')

const write = (relativePath, content) => {
  fs.writeFileSync(absolutePath(relativePath), content)
}

const File = {
  read,
  write,
}

export default File
