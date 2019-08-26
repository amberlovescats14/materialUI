import React from 'react'
import {AppBar, Toolbar, Typography }from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';


const Header = () => {
  return (
    <AppBar position="static">
    <Toolbar>
    <Typography variant="headline" color="inherit">
    Responsive h3</Typography>
    {/* <Typography variant="h3">Responsive h3</Typography> */}

      {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={classes.title}>
        News
      </Typography>
      <Button color="inherit">Login</Button> */}
    </Toolbar>
  </AppBar>
  )
}

export default Header
