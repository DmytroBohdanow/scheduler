import { app , BrowserWindow, ipcMain, screen } from 'electron'
import path from 'path'

export default class SchedulerApp {

    constructor () {
        this.subscribeForAppEvents()
        this.subscribeForIPC()
        app.whenReady().then(() => this.createWindow())
    }

    createWindow() {
        this.window = new BrowserWindow({
            title: CONFIG.name,
            width: CONFIG.width,
            height: CONFIG.height,
            minWidth: CONFIG.width,
            minHeight: CONFIG.height,
            maxWidth: CONFIG.width,
            maxHeight: CONFIG.height,
            frame: false,
            fullscreenWindowTitle: 'hidden', 
            webPreferences: {
              worldSafeExecuteJavaScript: true,
              preload: path.join(app.getAppPath(), 'preload', 'index.js')
            }
          })
        this.window.loadFile('renderer/index.html')
        this.window.webContents.openDevTools({ mode: 'detach'})
        this.window.on('closed', () => {
            this.window = null
          })
    }

    createUsersWindow() {
      const { width, height } = screen.getPrimaryDisplay().workAreaSize
      this.usersWindow = new BrowserWindow({
          title: CONFIG.name,
          width,
          height,
          maxWidth: width,
          maxHeight: height,
          frame: false,
          fullscreenWindowTitle: 'hidden', 
          webPreferences: {
            worldSafeExecuteJavaScript: true,
            preload: path.join(app.getAppPath(), 'preload', 'index.js')
          }
      })
      this.usersWindow.loadFile('renderer/users.html')
      this.usersWindow.webContents.openDevTools({ mode: 'detach'})
      this.usersWindow.on('closed', () => {
          this.usersWindow = null
      })
    }

    subscribeForAppEvents() {
        app.on('window-all-closed', () => {
            if (process.platform !== 'darwin') {
              app.quit()
            }
          })
          
          app.on('activate', () => {
            if (BrowserWindow.getAllWindows().length === 0) {
              this.createWindow()
            }
          })
    }

    subscribeForIPC() {
      ipcMain.on('open:users', (_, data) => {
        if(this.usersWindow) {
          this.usersWindow.show()
        } else {
          this.createUsersWindow()
        }
      })

      ipcMain.on('open:schedules', () => {
      })

      ipcMain.on('window:close', () => {
        BrowserWindow.getFocusedWindow().close()
      }) 

      ipcMain.on('window:minimize', () => {
        BrowserWindow.getFocusedWindow().minimize()
      }) 
    }
}