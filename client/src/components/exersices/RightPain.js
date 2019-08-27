import React from 'react'
import {Paper, Typography} from '@material-ui/core'

const RightPain = (props) => {
  const { styles } = props

  return (
    <Paper style={styles}>
      <Typography variant="h4">
        Welcome!
      </Typography>
      <Typography variant="subtitle1" style={{marginTop: '10px'}}>
        Please select an exercise from the list on the left
      </Typography>
    </Paper>
  )
}

export default RightPain
