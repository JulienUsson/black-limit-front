import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './Reducers'
import webSocketMiddleware from './Middleware/WebSocketMiddleware'

const configureStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(webSocketMiddleware))
  )

  return store
}

export default configureStore
