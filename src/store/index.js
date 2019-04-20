/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import * as reducers from './reducers'

const rootReducer = combineReducers(reducers)

export default (preloadedState = {}) => {
  const store = createStore(
    rootReducer,
    preloadedState,
    process.env.NODE_ENV === 'production' ? applyMiddleware(thunk) : composeWithDevTools(applyMiddleware(thunk))
  )
  return store
}
