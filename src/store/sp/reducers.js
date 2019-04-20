// @flow
/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import type { From, To, Mode, Deals, DealAction as Action, SpState } from '../../types/Deal'

// initial states
const pathIS = {
  cheapest: {},
  fastest: {}
}

const addPath = (state: SpState, from: From, to: To, mode: Mode, path: Deals) => {
  const key = `${from}:${to}`
  return {
    ...state,
    [mode]: {
      ...state[mode],
      [key]: path
    }
  }
}

const sp = (state: SpState = pathIS, action: Action) => {
  switch (action.type) {
    case 'ADD_SHORTEST_PATH':
      return addPath(state, action.from, action.to, action.mode, action.path)
    default:
      return state
  }
}

export default sp

/* Getters */
export const getShortestPath = (state: SpState, from: From, to: To, mode: Mode) => (state[mode] ? (state[mode][`${from}:${to}`] || []) : [])
