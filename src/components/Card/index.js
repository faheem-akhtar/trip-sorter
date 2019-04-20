/*
 * @project   Trip Sorter
 * @author    Faheem Akhtar <faheempiscean@gmail.com>
 *
*/
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'

const SimpleCard = ({ children, ...props }) => (
  <Card {...props}>
    <CardActionArea>
      <CardContent>
        {children}
      </CardContent>
    </CardActionArea>
  </Card>
)

export default SimpleCard
