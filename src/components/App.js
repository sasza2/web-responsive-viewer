import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import WelcomeScreen from './routes/WelcomeScreen'
import Overview from './routes/Overview'

import './App.sass'

const App = () => (
  <Router>
    <Route path='/' component={WelcomeScreen} />
    <Route path='/overview' component={Overview} />
  </Router>
)

export default App
