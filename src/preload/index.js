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
  subscribeForData: callback => {
    ipcRenderer.on('data', callback)
  },
  saveGroup: data => {
    ipcRenderer.send('save:group', data)
  },
  deleteGroup: data => {
    ipcRenderer.send('delete:group', data)
  },
  saveStatus: data => {
    ipcRenderer.send('save:status', data)
  },
  deleteStatus: data => {
    ipcRenderer.send('delete:status', data)
  },
  saveRole: data => {
    ipcRenderer.send('save:role', data)
  },
  deleteRole: data => {
    ipcRenderer.send('delete:role', data)
  },
  saveUser: data => {
    ipcRenderer.send('save:user', data)
  },
  deleteUser: data => {
    ipcRenderer.send('delete:user', data)
  },
 })
