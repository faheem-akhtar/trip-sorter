/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import HomePage from 'pages/Home'
import ResultPage from 'pages/Result'
import DefaultLayout from 'layouts/Default'

export const routes = [
  {
    path: '/',
    exact: true,
    main: HomePage,
    layout: DefaultLayout
  },
  {
    path: '/:from/:to/:mode',
    exact: true,
    main: ResultPage,
    layout: DefaultLayout,
    getParams: ({ match: { params } }) => ({ ...params })
  }
]
