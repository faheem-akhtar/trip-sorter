// @flow
/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import type { Deal, Deals, Currency, AddDealAction, AddDealsAction, SetCurrencyAction } from '../../types/Deal'
import { ADD_DEAL, ADD_DEALS, SET_CURRENCY } from '../action-types'
import dealModel from '../../helpers/models/Deal'

export const addDeal = (deal: Deal): AddDealAction => ({
  type: ADD_DEAL,
  deal
})

export const addDeals = (deals: Deals): AddDealsAction => ({
  type: ADD_DEALS,
  deals
})

export const setCurrency = (currency: Currency): SetCurrencyAction => ({
  type: SET_CURRENCY,
  currency
})

export const fetchDeals = () => (dispatch: Function): Promise<mixed> => {
  return dealModel
    .get()
    .then(({ data }) => {
      dispatch(addDeals(data.deals))
      dispatch(setCurrency(data.currency))
      return data
    })
}
