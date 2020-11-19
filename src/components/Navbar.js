import React from 'react';

import {AppBar , Toolbar , IconButton , Typography} from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";

const usestyles = makeStyles(()=>({
    root:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: '16px'
    },
    title:{
        flexGrow: 1
    },
    imagen:{
        borderRadius: '50%'
    }
}));

function Navbar(){
  const classes = usestyles() ;
  return(
      <div className={classes.root}>
          <AppBar position="static">
             <Toolbar>

                  <IconButton edge="start" className={classes.menuButton} color="inherit">
                     <MenuIcon/>
                  </IconButton>

                  <Typography variant="h6" className={classes.title}>
                    BorJaScriptyum
                  </Typography>

                  <IconButton color="inherit">
                     <img src={require('../assets/img/mohsen.jpg')} width="40px" height="40px" className={classes.imagen} />
                  </IconButton>

             </Toolbar>
           </AppBar>
      </div>
  );
}

export default Navbar;