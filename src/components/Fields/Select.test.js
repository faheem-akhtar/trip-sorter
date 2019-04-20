/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { shallow } from 'enzyme'
import SelectField from './Select'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

describe('SelectField Component', () => {
  it('renders without crashing', () => {
    shallow(<SelectField />)
  })

  it('should accept label', () => {
    const wrapper = shallow(<SelectField label="Gender" />)
    expect(wrapper.find(InputLabel).exists()).toEqual(true)
  })

  it('should contains Select', () => {
    const wrapper = shallow(<SelectField label="Gender" />)
    expect(wrapper.find(Select).exists()).toEqual(true)
  })

  it('should contains Menu Items', () => {
    const items = [{ id: 1, label: 'A' }, { id: 2, label: 'B' }]
    const wrapper = shallow(<SelectField label="Gender" items={items} />)
    expect(wrapper.find(MenuItem).exists()).toEqual(true)
  })
})
