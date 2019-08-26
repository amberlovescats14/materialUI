import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

const Footer = (props) => {
  const { muscles } = props
  return (
    <Paper >
      <Tabs
      // the value can be anything -1
        value={0}
        // value={value}
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
