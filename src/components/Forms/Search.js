/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React, { Component } from 'react'

import { SelectField, RadioButtons } from 'components/Fields'
import Button from "@material-ui/core/Button"

import './style.css'

const modeOptions = [
  {
    id: 'cheapest',
    label: 'Cheapest'
  },
  {
    id: 'fastest',
    label: 'Fastest'
  }
]

class SearchForm extends Component {
  state = {
    fields: {
      from: '',
      to: '',
      mode: 'cheapest'
    },
    arrivalCities: [],
    departureCities: []
  }
  handleChange = (name, value) => {
    const { fields } = this.state
    const departureCities = this.state.departureCities.map(city => ({
      ...city, disable: (name === 'from' && city.id === value)
    }))

    this.setState({
      fields: {
        ...fields,
        to: (name === 'from' && fields.to === value) ? '' : fields.to,
        [name]: value
      },
      departureCities
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props
    const { fields } = this.state
    if (this.isFormValid()) {
      onSubmit(fields)
    }
  }
  isFormValid = () => {
    const { fields } = this.state
    if (
      fields.from === ''
      || fields.to === ''
      || fields.mode === ''
    ) {
      return false
    } else {
      return true
    }
  }
  normalizeCities = cities => {
    return cities.map(item => ({ id: item, label: item, disable: false }))
  }
  componentWillReceiveProps ({ arrivalCities, departureCities }) {
    if (arrivalCities.length !== this.state.arrivalCities
      || departureCities.length !== this.state.departureCities
    ) {
      this.setState({
        arrivalCities: this.normalizeCities(arrivalCities),
        departureCities: this.normalizeCities(departureCities)
      });
    }
  }
  componentDidMount () {
    const { arrivalCities, departureCities } = this.props
    if (arrivalCities.length > 0 || departureCities.length > 0) {
      this.setState({
        arrivalCities: this.normalizeCities(arrivalCities),
        departureCities: this.normalizeCities(departureCities)
      });
    }
  }
  render() {
    const { fields, arrivalCities, departureCities } = this.state

    return (
      <form className="search-form" onSubmit={this.onSubmit}>
        <SelectField
          id="from"
          name="from"
          label="From"
          items={departureCities}
          value={fields.from}
          onChange={this.handleChange}
        />
        <SelectField
          id="to"
          name="to"
          label="To"
          items={arrivalCities}
          value={fields.to}
          onChange={this.handleChange}
        />
        <RadioButtons
          name="mode"
          items={modeOptions}
          value={fields.mode}
          onChange={this.handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          aria-label="Search"
          type="submit"
        >Search</Button>
      </form>
    )
  }
}

SearchForm.defaultProps = {
  arrivalCities: [],
  departureCities: [],
  onSubmit: () => {}
}

export default SearchForm
