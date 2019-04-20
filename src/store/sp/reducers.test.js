/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import deepFreeze from 'deep-freeze'

import sp, { getShortestPath } from './reducers'

describe('SP Reducers', () => {
  it('should handle the initial state', () => {
    expect(sp(undefined, {})).toEqual({ cheapest: {}, fastest: {}})
  })

  const path = [
    {
      transport: "train",
      departure: "London",
      arrival: "Amsterdam",
      duration: {
        h: "05",
        m: "00"
      },
      cost: 160,
      discount: 0,
      reference: "TLA0500"
    }
  ]
  const state = {
    cheapest: {},
    fastest: {}
  }
  const action = {
    type: 'ADD_SHORTEST_PATH',
    from: 'London',
    to: 'Prague' ,
    mode: 'cheapest',
    path
  }
  const expectedState = {
    cheapest: { 'London:Prague': path },
    fastest: {}
  }

  it('should handle ADD_SHORTEST_PATH', () => {
    deepFreeze(state)
    expect(sp(state, action)).toEqual(expectedState)
  })

  it('should return shortest path', () => {
    expect(getShortestPath(expectedState, 'London', 'Prague', 'cheapest'))
      .toEqual(path)
  })
})
