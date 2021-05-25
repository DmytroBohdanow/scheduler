import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  openUserManager: () => {
    ipcRenderer.send('open:users')
  },
  openScheduleManager: () => {
    ipcRenderer.send('open:schedules')
  },
  closeWindow: () => {
    ipcRenderer.send('window:close')
  },
  minimizeWindow: () => {
    ipcRenderer.send('window:minimize')
  },
})
