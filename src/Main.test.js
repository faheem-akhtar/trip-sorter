/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import { mount } from 'enzyme'
import Main from './Main'

it('Main renders without crashing', () => {
  mount(<Main />)
});
