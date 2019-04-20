// @flow
/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import type { From, To, Mode, Deals } from '../../types/Deal'
import { ADD_SHORTEST_PATH, AddShortestPathAction } from '../action-types'
import utility from '../../helpers/utility'

export const fetchShortestPath = (from: From, to: To, mode: Mode, deals: Deals): AddShortestPathAction => {
  const path: Deals = utility.findShortestPath(from, to, deals, mode === 'cheapest' ? 'final_cost' : 'final_duration')
  return {
    type: ADD_SHORTEST_PATH,
    from, to, mode, path
  }
}
