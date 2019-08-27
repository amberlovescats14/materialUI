import React from 'react'
import { Grid } from '@material-ui/core'
import LeftPain from './LeftPain'
import RightPain from './RightPain'
//uses jss
const styles = {
  Paper: {
    padding: '20%',
    marginTop: '10',
    marginBottom: '10',
    height: '500px',
    overflowY: 'auto'
  }
}

const Exercise = (props) => {
  const {category} = props
  //layout basics
  //uses a 12 box layout
  //sm 50%
  return (
    <Grid container >
    <Grid item sm>
      <LeftPain 
      categery={category} styles={styles.Paper} exercises={props.exercises}/>
    </Grid>
    <Grid item sm>
    <RightPain styles={styles.Paper}/>
    </Grid>
    </Grid>
  )
}

export default Exercise
