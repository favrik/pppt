import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from '../common/containers/App'
import configureStore from '../common/store/configureStore'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
const rootElement = document.getElementById('app')



render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
