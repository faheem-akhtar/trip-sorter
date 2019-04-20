// @flow
/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
export type Transport = string
export type Departure = string
export type Arrival = string
export type Cost = number
export type Ref = string
export type Discount = number
export type Currency = string

export type From = string
export type To = string
export type Mode = string

export type Duration = {
  h: string,
  m: string
}

export type Deal = {
  +transport: Transport,
  +departure: Departure,
  +arrival: Arrival,
  +duration: Duration,
  +cost: Cost,
  +discount: Discount,
  +reference: Ref
}

export type DealState = {
  +list: Deals,
  +currency: Currency
}

export type SpState = {
  +cheapest: mixed,
  +fastest: mixed
}

export type Deals = Array<Deal>

export type AddDealAction = { type: 'ADD_DEAL', deal: Deal }
export type AddDealsAction = { type: 'ADD_DEALS', deals: Deals }
export type SetCurrencyAction = { type: 'SET_CURRENCY', currency: Currency }

export type AddShortestPathAction = { type: 'ADD_SHORTEST_PATH', from: From, to: To, mode: Mode, path: Deals }

export type DealAction = AddDealAction | AddDealsAction | SetCurrencyAction | AddShortestPathAction
