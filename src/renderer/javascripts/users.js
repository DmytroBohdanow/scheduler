import React from 'react'
import ReactDOM from 'react-dom'
import { UsersApp } from './components/users/UsersApp'
require('users.css')

window.electron.subscribeForData((_, data) => {
  renderUsersApp(data.users, data.groups, data.roles, data.statuses)
})
const renderUsersApp = (users = [], groups = [], roles = [], statuses = []) => {
    ReactDOM.render(
      <UsersApp users={users} groups={groups} roles={roles} statuses={statuses}/>, 
      document.getElementById('root')
    )
  }

