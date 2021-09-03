import { app , BrowserWindow, ipcMain, screen } from 'electron'
import path from 'path'
import { Storage } from './storage'

export default class SchedulerApp {

    constructor () {
        this.storage = new Storage()
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
          frame: false,
          fullscreenWindowTitle: 'hidden', 
          webPreferences: {
            worldSafeExecuteJavaScript: true,
            preload: path.join(app.getAppPath(), 'preload', 'index.js')
          }
      })

      this.usersWindow.loadFile('renderer/users.html')

      this.usersWindow.webContents.openDevTools({ mode: 'detach'})

      this.usersWindow.webContents.on('did-finish-load', () => {
        this.sendDataToUsers()
      })

      this.usersWindow.on('closed', () => {
          this.usersWindow = null
      })
    }

    createSchedulerWindow() {
      const { width, height } = screen.getPrimaryDisplay().workAreaSize
      this.schedulerWindow = new BrowserWindow({
          title: CONFIG.name,
          width,
          height,
          frame: false,
          fullscreenWindowTitle: 'hidden', 
          webPreferences: {
            worldSafeExecuteJavaScript: true,
            preload: path.join(app.getAppPath(), 'preload', 'index.js')
          }
      })

      this.schedulerWindow.loadFile('renderer/scheduler.html')

      this.schedulerWindow.webContents.openDevTools({ mode: 'detach'})

      this.schedulerWindow.webContents.on('did-finish-load', () => {
        this.sendDataToScheduler()
      })

      this.schedulerWindow.on('closed', () => {
          this.schedulerWindow = null
      })
    }

     sendDataToUsers() {
      this.usersWindow.webContents.send('data', { 
        users: this.storage.get('users'),
        groups: this.storage.get('groups'),
        roles: this.storage.get('roles'),
        statuses: this.storage.get('statuses')
      })
    }
    sendDataToScheduler() {
      this.schedulerWindow.webContents.send('data', { 
        users: this.storage.get('users'),
        groups: this.storage.get('groups'),
        roles: this.storage.get('roles'),
        statuses: this.storage.get('statuses')
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
        if(this.schedulerWindow) {
          this.schedulerWindow.show()
        } else {
          this.createSchedulerWindow()
        }
      })

      ipcMain.on('window:close', () => {
        BrowserWindow.getFocusedWindow().close()
      }) 

      ipcMain.on('window:minimize', () => {
        BrowserWindow.getFocusedWindow().minimize()
      })

      ipcMain.on('save:group', (_, data) => {
        console.log(data)
        const groups = this.storage.get('groups') || []
        groups.push(data)
        this.storage.set('groups', groups)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      }) 

      ipcMain.on('save:role', (_, data) => {
        const roles = this.storage.get('roles') || []
        roles.push(data)
        this.storage.set('roles', roles)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      }) 

      ipcMain.on('save:status', (_, data) => {
        const statuses = this.storage.get('statuses') || []
        statuses.push(data)
        this.storage.set('statuses', statuses)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      })

      ipcMain.on('save:user', (_, data) => {
        const users = this.storage.get('users') || []
        users.push(data)
        this.storage.set('users', users)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      }) 

      ipcMain.on('delete:group', (_, data) => {
        let groups = this.storage.get('groups') || []
        groups = groups.filter(el => {
          return el.id !== data
        })
        this.storage.set('groups', groups)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      })

      ipcMain.on('delete:role', (_, data) => {
        let roles = this.storage.get('roles') || []
        roles = roles.filter(el => {
          return el.id !== data
        })
        this.storage.set('roles', roles)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      }) 

      ipcMain.on('delete:user', (_, data) => {
        let users = this.storage.get('users') || []
        users = users.filter(el => {
          return el.id !== data
        })
        console.log(data, users)
        this.storage.set('users', users)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      }) 

      ipcMain.on('delete:status', (_, data) => {
        let statuses = this.storage.get('statuses') || []
        statuses = statuses.filter(el => {
          return el.id !== data
        })
        this.storage.set('statuses', statuses)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      })
      
      ipcMain.on('rewrite:user', (_, data) => {
        this.storage.set('users', data)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      })

      ipcMain.on('rewrite:role', (_, data) => {
        this.storage.set('roles', data)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      }) 

      ipcMain.on('rewrite:group', (_, data) => {
        this.storage.set('groups', data)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      }) 

      ipcMain.on('rewrite:status', (_, data) => {
        this.storage.set('statuses', data)
        this.sendDataToUsers()
        this.schedulerWindow ? this.sendDataToScheduler() : null
      }) 
    }
}