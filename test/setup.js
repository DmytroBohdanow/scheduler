const path = require('path')
const { Application } = require('spectron')

const appPath = () => {
  switch (process.platform) {
    case 'darwin':
      return path.join(__dirname, '..', '.tmp', 'mac', 'Scheduler.app', 'Contents', 'MacOS', 'Scheduler')
    case 'linux':
      return path.join(__dirname, '..', '.tmp', 'linux', 'Scheduler')
    case 'win32':
      return path.join(__dirname, '..', '.tmp', 'win-unpacked', 'Scheduler.exe')
    default:
      throw Error(`Unsupported platform ${process.platform}`)
  }
}
global.app = new Application({ path: appPath() })
