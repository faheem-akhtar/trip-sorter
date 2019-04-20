/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { shallow } from 'enzyme'
import DefaultLayout from './Default'

describe('DefaultLayout Components', () => {
  it('renders without crashing', () => {
    shallow(<DefaultLayout />)
  })
})
