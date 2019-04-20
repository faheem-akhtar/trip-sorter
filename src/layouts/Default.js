/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { Route } from 'react-router-dom'

import Header from 'components/Header'

export default ({component: Component, getParams, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <div>
        <Header />
          <main>
            <Component {...matchProps} {...(getParams ? getParams(matchProps) : {})} />
          </main>
      </div>
    )} />
  )
}
