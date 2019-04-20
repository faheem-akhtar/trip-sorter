// @flow
/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import { combineReducers } from 'redux'

import find from 'lodash/find'
import filter from 'lodash/filter'
import map from 'lodash/map'
import uniq from 'lodash/uniq'
import sortBy from 'lodash/sortBy'

import type { Deal, Deals, Currency, DealAction as Action, DealState } from '../../types/Deal'

// initial states
const dealIS = []

const addDeal = (state, item: Deal) => {
  const entity = {
    ...item,
    final_cost: item.cost - (item.cost * item.discount / 100),
    final_duration: parseInt(item.duration.h, 10) * 60 + parseInt(item.duration.m, 10)// in minutes
  }
  return [
    ...state,
    ...[entity]
  ]
}

const list = (state = dealIS, action: Action): Deals => {
  switch (action.type) {
    case 'ADD_DEAL':
      return addDeal(state, action.deal)
    case 'ADD_DEALS':
      return action.deals.reduce(addDeal, state)
    default:
      return state
  }
}

const currency = (state = '', action: Action): Currency => {
  switch (action.type) {
    case 'SET_CURRENCY':
      return action.currency
    default:
      return state
  }
}

export default combineReducers({
  list,
  currency
})

/* Getters */
export const getCurrency = (state: DealState) => state.currency

export const getDealBy = (state: DealState, func: mixed) => find(state.list, func) || {}

export const getDealsBy = (state: DealState, func: mixed) => filter(state.list, func) || []

export const getCitiesBy = (state: DealState, field: string) => sortBy(
  uniq(
    map(state.list, item => item[field])
  )
)
