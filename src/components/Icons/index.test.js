/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { shallow } from 'enzyme'
import { TrainIcon, CarIcon, BusIcon, MoneyIcon, FastForwardIcon } from './index'

describe('Icons Components', () => {
  it('TrainIcon renders without crashing', () => {
    shallow(<TrainIcon />)
  })

  it('CarIcon renders without crashing', () => {
    shallow(<CarIcon />)
  })

  it('BusIcon renders without crashing', () => {
    shallow(<BusIcon />)
  })

  it('MoneyIcon renders without crashing', () => {
    shallow(<MoneyIcon />)
  })

  it('FastForwardIcon renders without crashing', () => {
    shallow(<FastForwardIcon />)
  })
})
