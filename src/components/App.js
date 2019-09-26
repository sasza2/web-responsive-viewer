import React from 'react'
import { StylesProvider } from '@material-ui/styles';

import Overview from './routes/Overview'

import './App.sass'

const App = () => (
  <StylesProvider injectFirst>
    <Overview />  
  </StylesProvider>
)

export default App
