/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { shallow } from 'enzyme'
import HomePage from './Home'

describe('HomePage Components', () => {
  it('renders without crashing', () => {
    shallow(<HomePage />)
  })
})
