/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './store'

export const store = configureStore()

const Main = () => (
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)

export default Main
