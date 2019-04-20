/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'

class RadioButtons extends Component {
  state = {
    value: ''
  }
  handleChange = ({ target }) => {
    const { onChange } = this.props
    this.setState({ value: target.value });
    onChange(target.name, target.value)
  }
  componentWillReceiveProps ({ value }) {
    if (this.state.value !== value) {
      this.setState({ value })
    }
  }
  componentDidMount () {
    const { value } = this.props
    if (value) {
      this.setState({ value })
    }
  }
  render () {
    const { label, name, items } = this.props
    const { value } = this.state
    return (
      <FormControl className="radio-buttons">
        {label ? <FormLabel>{label}</FormLabel>: ''}
        <RadioGroup
          name={name}
          value={value}
          onChange={this.handleChange}
          className="inline"
        >
          {items.map(item => (
            <FormControlLabel key={item.id} value={item.id} control={<Radio />} label={item.label} />
          ))}
        </RadioGroup>
      </FormControl>
    )
  }
}

RadioButtons.defaultProps = {
  label: '',
  name: '',
  items: [],
  value: '',
  onChange: () => {}
}

export default RadioButtons
