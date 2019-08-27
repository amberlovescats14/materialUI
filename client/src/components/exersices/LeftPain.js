import React, { Fragment } from 'react'
import {Paper, Typography, List, ListItemText, ListItem} from '@material-ui/core'

const LeftPain = (props) => {
  const { styles, exercises, category } = props
  return (
    <Paper style={styles}>
      LEFT PAIN
      {exercises.map((group, exercise)=> 
          !category || category === group[0] ?
         ( <Fragment key={exercise}>
          <Typography variant="h5"
          style={{textTransform: 'capitalize'}}>{group[0]}</Typography>
          <List component="ul" >
          {exercises.map((group, exercise)=> {
            return (
              <ListItem button key={exercise}>
              <ListItemText primary={group[1].map((g)=> `${g.title}`)} />
            </ListItem>
               
            )
          })}

          </List>
      </Fragment> ): null
        
      )}
    </Paper>
  )
}

export default LeftPain
