import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

const Footer = (props) => {
  const { muscles, category, onSelect } = props
  const index = category ? muscles.findIndex(group => group === category) + 1: 0
  return (
    <Paper >
      <Tabs
      // the value can be anything -1
        value={index}
        // value={value}
        onChange={(e, index)=>{
          onSelect(index === 0 ? '' : muscles[index -1])
        }}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
      <Tab label="All" />
      {muscles.map((group, i)=> {
        return <Tab label={group} key={i} />
      })}

      </Tabs>
    </Paper>
  )
}

export default Footer
