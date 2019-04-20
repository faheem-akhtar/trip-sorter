/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'

describe('Header Component', () => {
  it('renders without crashing', () => {
    shallow(<Header />)
  })
})
