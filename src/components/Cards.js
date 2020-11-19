import React from 'react';
import {Card ,Typography , CardContent , CardActions } from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
const usestyles = makeStyles(()=>({
        root:{
            textAlign:'center',
            background:'rgba(73,155,234,1)'   },
        texto:{
            fontSize: 18,
            color: 'white'},
        titulo:{
            fontWeight:'bold',
            fontSize:20,
            color: 'white'}
    }));
function Cards(props){
    const classes =usestyles();
    return(
        <Card className={classes.root}>
            <CardContent>
               <Typography className={classes.titulo}>
                   {props.titulo}
               </Typography>
               <Typography className={classes.texto}>
                   {props.texto}
               </Typography>
            </CardContent>
        </Card>
    )
};
export default Cards;