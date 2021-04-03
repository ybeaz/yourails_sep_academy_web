import React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'

import { store } from './DataLayer/store'
import { RouterScreensConfig } from './RouterScreensConfig'

const rootElement = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <RouterScreensConfig />
  </Provider>,
  rootElement
)