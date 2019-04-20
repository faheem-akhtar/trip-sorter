/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { shallow } from 'enzyme'
import RadioButtons from './RadioButtons'

describe('RadioButtons Component', () => {
  it('renders without crashing', () => {
    shallow(<RadioButtons />)
  })

  it('should accept label', () => {
    const wrapper = shallow(<RadioButtons label="Gender" />)
    expect(wrapper.find('RadioGroup').exists()).toEqual(true)
  })
})
