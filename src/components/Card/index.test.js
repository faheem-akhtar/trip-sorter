/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { shallow } from 'enzyme'
import SimpleCard from './index'

describe('SimpleCard Component', () => {
  it('renders without crashing', () => {
    const msg = 'This is the content of the card.'
    const card = shallow(<SimpleCard>{msg}</SimpleCard>)
    expect(card.contains(msg)).toEqual(true)
  })

  it('Accept props', () => {
    const msg = 'This is the content of the card.'
    const card = shallow(<SimpleCard className="my-class">{msg}</SimpleCard>)
    expect(card.prop('className')).toEqual('my-class')
  })
})
