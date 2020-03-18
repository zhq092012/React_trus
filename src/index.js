import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { Map, List, fromJS } from 'immutable'
import store from './store'
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
