/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { shallow } from 'enzyme'
import SearchForm from './Search'
import Button from '@material-ui/core/Button'

describe('SearchForm Component', () => {
  it('renders without crashing', () => {
    shallow(<SearchForm />)
  })

  it('should contains Select fields', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.find('SelectField').exists()).toEqual(true)
  })

  it('should contains Radio button', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.find('RadioButtons').exists()).toEqual(true)
  })

  it('should contains a Button', () => {
    const wrapper = shallow(<SearchForm />)
    expect(wrapper.find(Button).exists()).toEqual(true)
  })
})
