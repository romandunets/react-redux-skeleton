import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Layout from './components/Layout'
import reducer from './reducers'

const store = createStore(reducer)

render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('app')
)
