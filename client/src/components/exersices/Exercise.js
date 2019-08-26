import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPain from './LeftPain'
import RightPain from './RightPain'
//uses jss
const styles = {
  Paper: {
    padding: '20%',
    marginTop: '10',
    marginBottom: '10'
  }
}

const Exercise = () => {
  //layout basics
  //uses a 12 box layout
  //sm 50%
  return (
    <Grid container >
    <Grid item sm>
      <LeftPain styles={styles.Paper}/>
    </Grid>
    <Grid item sm>
    <RightPain styles={styles.Paper}/>
    </Grid>
    </Grid>
  )
}

export default Exercise
