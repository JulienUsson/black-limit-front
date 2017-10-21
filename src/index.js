import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import reducers from './Reducers';
import webSocketMiddleware from './Middleware/WebSocketMiddleware';
import Table from './Components/Table';
import Hand from './Components/Hand';

import './index.css';

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(webSocketMiddleware)),
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/table" component={Table} />
        <Route path="/hand" component={Hand} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);
