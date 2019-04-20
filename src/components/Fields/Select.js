/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl';

class SelectField extends Component {
  state = {
    value: '',
    items: []
  }
  handleChange = ({ target }) => {
    const { onChange } = this.props
    this.setState({ value: target.value });
    onChange(target.name, target.value)
  }
  componentWillReceiveProps ({ value, items }) {
    if (this.state.value !== value || items.length !== this.state.items.length) {
      this.setState({ value, items })
    }
  }
  componentDidMount () {
    const { value, items } = this.props
    if (value || items) {
      this.setState({ value, items })
    }
  }
  render () {
    const { value, items } = this.state
    const { id, name, label } = this.props
    return (
      <FormControl>
        <InputLabel htmlFor="age-simple">{label}</InputLabel>
        <Select
            value={value}
            onChange={this.handleChange}
            inputProps={{ name, id }}
          >
            {items.map(item => (
              <MenuItem key={item.id} value={item.id} disabled={item.disable}>{item.label}</MenuItem>
            ))}
          </Select>
      </FormControl>
    )
  }
}

SelectField.defaultProps = {
  id: '',
  name: '',
  label: '',
  value: '',
  items: [],
  onChange: () => {}
}

export default SelectField
