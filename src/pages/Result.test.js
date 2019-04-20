/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { shallow } from 'enzyme'
import ResultPage from './Result'
import { store } from '../Main'

describe('ResultPage Components', () => {
  it('renders without crashing', () => {
    shallow(<ResultPage store={store} />)
  })
})
