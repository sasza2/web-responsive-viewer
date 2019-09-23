import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { StylesProvider } from '@material-ui/styles';

import WelcomeScreen from './routes/WelcomeScreen'
import Overview from './routes/Overview'

import './App.sass'

const App = () => (
    <StylesProvider>
        <Router>
            <Route path='/' component={WelcomeScreen} />
            <Route path='/overview' component={Overview} />
        </Router>
    </StylesProvider>
)

export default App
