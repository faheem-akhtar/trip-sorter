/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React, { Component } from 'react'
import { Switch } from 'react-router-dom'

import { routes } from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          {routes.map((route, index) => {
            const Layout = route.layout
            const { layout, path, exact, main, ...rest } = route
            return (
              <Layout
                key={index}
                path={path}
                exact={!!exact}
                component={main}
                {...rest}
              />
            )
          })}
        </Switch>
      </div>
    )
  }
}

export default App
