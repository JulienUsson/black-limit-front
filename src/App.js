import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui/styles'

import theme from 'Theme'
import Table from './Components/Table'
import Hand from './Components/Hand'

import './index.css'

export default () => (
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/hand" component={Hand} />
      </Switch>
    </Router>
  </MuiThemeProvider>
)
