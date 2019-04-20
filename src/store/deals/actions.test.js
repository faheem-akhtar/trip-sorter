/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import * as actions from './actions'

describe('Deals Actions', () => {
  it('should create a ADD_DEAL action', () => {
    const deal = {
      transport: 'train',
      departure: 'London',
      arrival: 'Amsterdam',
      duration: {
        h: '05',
        m: '00'
      },
      cost: 160,
      discount: 0,
      reference: "TLA0500"
    }
    const expectedAction = {
      type: 'ADD_DEAL',
      deal
    }
    expect(actions.addDeal(deal)).toEqual(expectedAction)
  })

  it('should create a ADD_DEALS action', () => {
    const deals = [
      {
        transport: 'train',
        departure: 'London',
        arrival: 'Amsterdam',
        duration: {
          h: '05',
          m: '00'
        },
        cost: 160,
        discount: 0,
        reference: "TLA0500"
      },
      {
        transport: 'bus',
        departure: 'Amsterdam',
        arrival: 'London',
        duration: {
          h: '05',
          m: '00'
        },
        cost: 160,
        discount: 0,
        reference: "TLA0500"
      }
    ]
    const expectedAction = {
      type: 'ADD_DEALS',
      deals
    }
    expect(actions.addDeals(deals)).toEqual(expectedAction)
  })

  it('should create a SET_CURRENCY action', () => {
    const currency = 'AED'
    const expectedAction = {
      type: 'SET_CURRENCY',
      currency
    }
    expect(actions.setCurrency(currency)).toEqual(expectedAction)
  })
})
