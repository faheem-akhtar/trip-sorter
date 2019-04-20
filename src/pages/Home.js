/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { SearchForm } from 'components/Forms'
import { fetchDeals } from 'store/deals/actions'
import { getCitiesBy, getDealsBy } from 'store/deals/reducers'

class HomePage extends Component {
  showResult = ({ from, to, mode }) => {
    const { history } = this.props
    history.push(`${from}/${to}/${mode}`);
  }
  componentDidMount () {
    const { fetchDeals, deals } = this.props
    if (!deals.length) {
      fetchDeals()
    }
  }
  render () {
    const { arrivalCities, departureCities } = this.props

    return (
      <SearchForm
        onSubmit={this.showResult}
        arrivalCities={arrivalCities}
        departureCities={departureCities}
      />
    )
  }
}

const mapStateToProp = ({ deals }) => {
  return {
    arrivalCities: getCitiesBy(deals, 'arrival'),
    departureCities: getCitiesBy(deals, 'departure'),
    deals: getDealsBy(deals)
  }
}


export default withRouter(
  connect(mapStateToProp, {
    fetchDeals
  })(HomePage)
);
