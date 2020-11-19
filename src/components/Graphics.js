import React from 'react';
import {Line} from 'react-chartjs-2';

import '../assets/css/Graphic.css';

function Graphics(props){
   const data={
       labels:["Marc","April","may","June","julay","August"],
       datasets:[
           {
               label:"hours g dg ddfgd  dfg",
               fill:  false,
               backgroundColor :'rgba(73,155,234,1)',
               borderColor: 'rgba(73,155,234,1)',
               pointBorderColor:'rgba(73,155,234,1)',
               pointBorderwidth:1,
               pointHoverRadius:5,
               pointHoverBackgroundColor:'rgba(73,155,234,1)',
               pointHoverBorderColor: 'rgba(73,155,234,1)',
               PointRadius: 1,
               PointHitRadius: 10,
               data: [.17,19,156,357,565,1149]
           }
       ]
   }

    return(
       <div className="containerGraohics">
          <Line data={data} />
       </div>
    );
}


export default Graphics;