import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import { BrowserRouter  as Router , Switch , Route , Link } from "react-router-dom";
import { Drawer , List , ListItem, ListItemIcon , ListItemText , Container , Typography} from '@material-ui/core';


import DashboardIcon from '@material-ui/icons/Dashboard';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import SharpIcon from '@material-ui/icons/CollectionsBookmarkSharp';

import Navbar from "../components/Navbar";


import 'fontsource-roboto';

import '../assets/css/back.css';


import A from '@material-ui/icons/Favorite';
import B from '@material-ui/icons/Share';
import C from '@material-ui/icons/ExpandMore';
import D from '@material-ui/icons/MoreVert';
import MenuIcon from '@material-ui/icons/Menu';


import CardsHeader from '../components/CardsHeader';
import Cards from '../components/Cards';

import Graphics from '../components/Graphics';


//import TableMaterial from '../components/TabelMasterial';

const useStyles = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        display:'flex'
    },
    icons:{
        color: 'white'
    },
    container:{
        paddingTop:'40px',
        paddingLeft:'40px',
        alignItems:'center',
    
    },
    container2:{
        paddingTop:'40px',
        paddingLeft:'40px',
        alignItems:'center',
      //  overflowX:'scroll'
      
    },
    containerGraphic:{
        marginTop: '40px'
    },
    containerTable:{
        marginTop: '40px'
    },
    iconstop:{
        marginTop: '50px',
        textAlign:'center',
        color:'white'
    },
    align:{
        textAlign:'left'   ,
        paddingLeft:'40px' ,
        color:'white'
    },
    
    div:{
        backgroundColor:'red' ,
    }
}));

const data =[
    {
      id:1,
      video:" aaaaaaaaaaaaaaa ",
      fecha:" 1111111111111",
      visualizaciones: 32,
      imagen: require("../assets/img/am.jpg"),
    },
    {
        id:2,
        video:" aaaaaaaaaaaaaaa2 ",
        fecha:" 11111111111112",
        visualizaciones: 22,
        imagen: require("../assets/img/am.jpg"),
      },
      {
        id:3,
        video:" aaaaaaaaaaaaaaa3 ",
        fecha:" 11111111111113",
        visualizaciones: 33,
        imagen: require("../assets/img/am.jpg"),
      }
];

function Dashboard(){
    const classes = useStyles();
  return(
      <div className={classes.root}>
          
          
          <Drawer
            style={{width :'220px'}}
            variant="persistent"
            anchor="left"
            open={true}
            //classes={{paper: classes.drawerPaper}} 
            >
        
            <List >
              <ListItem >
                <ListItemIcon>
                      <SharpIcon/>
                </ListItemIcon>
                <ListItemText primary={"Card UI kit"} />
              </ListItem>

            </List>
            
            <List>
                <Link to="/Dashboard" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                      <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Dashboard"} />
                </ListItem>
                </Link>    

                 <Link to="/Car" >
                <ListItem button>
                    <ListItemIcon>
                      <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Car"} />
                </ListItem>
                </Link>         
                
                <Link to="/Messages" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                      <MessageIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Messages"} />
                </ListItem>
                </Link> 

                <Link to="/Notifications" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                      <NotificationsIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Notifications"} />
                </ListItem>
                </Link> 

                <Link to="/Favourites" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                      <FavoriteIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Favourites"} />
                </ListItem>
                </Link> 

                <Link to="/ShoppingCart" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                      <ShoppingCartIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Shopping Cart"} />
                </ListItem>
                </Link> 

                <Link to="/PersonIcon" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                      <PersonIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"My  Profile"} />
                </ListItem>
                </Link> 
            </List>
        
            <List >
            <ListItem className="card">
                <ListItemIcon>
                      <img src='../assets/img/mohsen.jpg' className="rad"/>
                </ListItemIcon>
                <ListItemText primary={"Email Walter"} />
            </ListItem>
            </List>

          </Drawer>
   
          <Grid container className='b' spacing={2} >

    
             <Grid container spacing={1} className={classes.containerGraphic} xs={12} sm={12}  md={12} lg={12}  xl={12}>

                 <Grid item xs={12} sm={6}  md={4} lg={4}  xl={4}  >
                <div> 
                   <h1 className={classes.align}> Welcom back Sarah </h1>
                   <h5 className={classes.align}> Hi Sarah this is your dashboard</h5>
                </div>
             </Grid>
                 <Grid item xs={0} sm={0}  md={4} lg={4}  xl={4} >
             </Grid>
                 <Grid item xs={12} sm={6}  md={4} lg={4}  xl={4} >  
                 <div className={classes.iconstop} > <MenuIcon/> </div>  
             </Grid>

              </Grid>
   
            
             <Grid container spacing={1} className={classes.container} xs={12} sm={12}  md={4} lg={4}  xl={4}>
                
                 <Grid item xs={12} sm={12}  md={12} lg={12}  xl={12} >
                     <Cards titulo="aaaaa" texto="692"/>
                 </Grid>
                 <Grid item xs={12} sm={12}  md={12} lg={12}  xl={12} >
                     <Cards titulo="bbbbb" texto="692"/>
                 </Grid>
                
             </Grid>   
             <Grid container spacing={1}  className={classes.container2} xs={12} sm={12}  md={8} lg={8}  xl={8}>
                
                <Grid item xs={12} sm={12}  md={6} lg={6}  xl={6} >
                    <Graphics/>
                </Grid>
                <Grid item xs={12} sm={12}  md={6} lg={6}  xl={6} >
                   <Graphics/>
                </Grid>
               
            </Grid>

        
          </Grid>
      
      
      </div>

  );
}

export default Dashboard;

/*
 <Grid item xs={12} sm={12}  md={5} lg={5}  xl={5} className={classes.containerGraphic} >
                <Graphics/>
             </Grid>  



 <Grid item xs={12} className={classes.containerTable} >
                <TableMaterial data={data} />
             </Grid>*/

 /*<Grid item xs={12}  >
                <Navbar/>
             </Grid>*/            