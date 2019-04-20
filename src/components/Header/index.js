/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="title" color="inherit">Trip Sorter</Typography>
    </Toolbar>
  </AppBar>
)

export default Header
