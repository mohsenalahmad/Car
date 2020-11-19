import React from 'react';
import {Tabel , TableBody , TabelCell , TabelContainer , TableHead , TabelRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const StyledTableCell = withStyles(()=>({
    head:{
     color:'white',
     background: 'black',
     textAlign: 'center'
    },
    body:{
      fontSize: 14,
    },
}))(TabelCell);

function TableMaterial(props){
    return(

       <div></div>
    );
}


export default TableMaterial;

/*
 <TabelContainer>
           <Tabel>
            <TableHead>
                <TabelRow>
                    <StyledTableCell>Video1</StyledTableCell>
                    <StyledTableCell>Video2</StyledTableCell>
                    <StyledTableCell>Video3</StyledTableCell>
                </TabelRow>
            </TableHead>

            <TableBody>
                {props.data.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TabelCell><img src={elemento.imagen} width="35px" height="25px" />{elemento.video}</TabelCell>
                        <TabelCell align="center">{elemento,fecha}</TabelCell>
                        <TabelCell align="center">{elemento,visualizaciones}</TabelCell>
                    </TableRow>
                ))}
            </TableBody>
           </Tabel>  
        </TabelContainer>*/