const { ipcRenderer: ipc, remote } = require('electron')

const receiveMessage = remote.getGlobal('receiveMessage')

function attachIPCListeners() {
  ipc.on('action', (event, data) => {
    window.Bridge.infoFromMain(data)
  })
}

function sendMessage(message) {
  receiveMessage({
    ...message,
    from: window.webDeviceId,
  })
}

function infoFromMain(data){
  if(data.from === window.webDeviceId) return
  switch(data.type){
    case 'scroll':
      clearTimeout(window.scrollTimer)
      window.scrollTimer = setTimeout(() => {
        window.scrollTo(0, data.scrollY)
      }, 100)
      break
    default:
      throw new 'unexpected type'
  }
}

function init() {
  attachIPCListeners()

  window.Bridge = {
    infoFromMain,
    sendMessage
  }

  window.scrollTimer = null

  window.addEventListener('scroll', () => {
    window.Bridge.sendMessage({ type: 'scroll', scrollY: window.scrollY })
  })
}

init()