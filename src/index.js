/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import ReactDOM from 'react-dom'

import Main from './Main'
import * as serviceWorker from './serviceWorker'
import WebFontLoader from 'webfontloader'

import './index.css'

const rootElem = document.getElementById('root')

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500', 'Material Icons'],
  },
})

ReactDOM.render(<Main />, rootElem)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()

// if (module.hot) {
//   module.hot.accept('./Main', () => {
//     ReactDOM.render(
//       <Main />
//     , rootElem)
//   })
// }
