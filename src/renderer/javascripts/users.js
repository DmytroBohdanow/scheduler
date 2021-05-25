import React from 'react'
import ReactDOM from 'react-dom'
import { UsersApp } from './components/UsersApp'
require('users.css')

window.onload = () => {
    ReactDOM.render(<UsersApp />, document.getElementById('root'))
  }

