import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import reducer from './reducers'

const middleware = applyMiddleware(thunk)
const store = createStore(reducer, middleware)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
