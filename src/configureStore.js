import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './Reducers'
import webSocketMiddleware from './Middleware/WebSocketMiddleware'

const configureStore = () => {
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(webSocketMiddleware))
  )

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./Reducers', () => {
        store.replaceReducer(reducers)
      })
    }
  }

  return store
}

export default configureStore
