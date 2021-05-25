import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
require('menu.css')

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}