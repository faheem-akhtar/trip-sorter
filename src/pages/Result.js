/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from "@material-ui/core/Button"
import Typography from '@material-ui/core/Typography'

import SimpleCard from 'components/Card'
import { fetchDeals } from 'store/deals/actions'
import { getDealsBy, getCurrency } from 'store/deals/reducers'
import { fetchShortestPath } from 'store/sp/actions'
import { getShortestPath } from 'store/sp/reducers'
import { TrainIcon, CarIcon, BusIcon, MoneyIcon, FastForwardIcon } from 'components/Icons'

class ResultPage extends Component {
  state = {
    mode: 'cheapest'
  }
  componentWillReceiveProps ({ from, to, mode, deals }) {
    const { fetchShortestPath } = this.props
    if (deals.length !== this.props.deals.length) {
      fetchShortestPath(from, to, mode, deals)
    }
    if (mode !== this.state.mode) {
      fetchShortestPath(from, to, mode, deals)
      this.setState({ mode: mode })
    }
  }
  componentDidMount () {
    const { from, to, mode, deals, fetchDeals, fetchShortestPath } = this.props
    if (!deals.length) {
      fetchDeals()
    } else {
      fetchShortestPath(from, to, mode, deals)
    }
    this.setState({ mode: mode })
  }
  render () {
    const { from, to, routes, currency } = this.props
    const { mode } = this.state
    const totalDuration = routes.reduce((result, item) => result + item.final_duration, 0) / 60
    const totalHours = Math.floor(totalDuration)

    return (
      <div className="search-result">
        <SimpleCard className="title">
          <Typography variant="display1" component="h1">
            <span>{from} > {to}</span>
            <span style={{ textAlign: 'right' }}>
              <Link title="Cheapest" className={mode === 'cheapest' ? 'active' : ''} to={`/${from}/${to}/cheapest`}><MoneyIcon /></Link>
              <Link title="Fastest" className={mode === 'fastest' ? 'active' : ''} to={`/${from}/${to}/fastest`}><FastForwardIcon /></Link>
            </span>
          </Typography>
        </SimpleCard>
        <br/><br/>
        <div className="search-result-items">
          {routes.map((route, id) => (
            <SimpleCard key={id}>
              <Typography gutterBottom variant="headline" component="h2">
                <span>{route.departure} > {route.arrival}</span>
                <span>{route.final_cost} {currency}</span>
              </Typography>
              <div className="desc">
                {route.transport === 'train' ? <TrainIcon /> : ''}
                {route.transport === 'bus' ? <BusIcon /> : ''}
                {route.transport === 'car' ? <CarIcon /> : ''}
                <Typography component="p">
                  <i>{route.reference}</i> for <b>{route.duration.h}h {route.duration.m}m</b>
                </Typography>
              </div>
            </SimpleCard>
          ))}
          {routes.length ? <SimpleCard style={{ backgroundColor: '#ebebeb' }}>
            <Typography variant="title" component="h2">
              <span>Total</span>
              <span>{totalHours}h {(totalDuration - totalHours) * 60}m</span>
              <span>{routes.reduce((result, item) => result + item.final_cost, 0)} {currency}</span>
            </Typography>
          </SimpleCard>: <Typography variant="title" component="p" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Sorry no route available.
          </Typography>}
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          aria-label="Reset"
          component={Link}
          to="/"
          style={{ width: '100%' }}
        >Reset</Button>
      </div>
    )
  }
}

const mapStateToProp = ({ deals, sp }, { from, to, mode }) => ({
  deals: getDealsBy(deals),
  routes: getShortestPath(sp, from, to, mode),
  currency: getCurrency(deals)
})

export default connect(mapStateToProp, { fetchDeals, fetchShortestPath })(ResultPage)
