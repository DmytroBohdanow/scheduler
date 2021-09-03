import React from 'react'
import ReactDOM from 'react-dom'
import { SchedulerApp } from './components/scheduler/SchedulerApp'
require('scheduler.css')

window.electron.subscribeForData((_, data) => {
  renderSchedulerApp(data.users, data.groups, data.roles, data.statuses)
})
const renderSchedulerApp = (users = [], groups = [], roles = [], statuses = []) => {
    ReactDOM.render(
      <SchedulerApp data={{users, groups, roles, statuses}} />, 
      document.getElementById('root')
    )
  }