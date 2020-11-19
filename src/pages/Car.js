import React , {useEffect , useState , Component}  from 'react';
import axios from 'axios';
import {Table , TableContainer , TableHead , TableCell , TableBody , TableRow , Modal , Button , TextField} from '@material-ui/core';
import {Edit , Delete, AddAPhoto} from '@material-ui/icons';

import {makeStyles} from '@material-ui/core/styles'

import '../assets/css/Car.css';

//const baseurl='http://localhost:3001/consolas'
const baseurl = 'http://localhost:3004/works' ;

//const baseurl= 'js/data.json' ;

const useStyles = makeStyles((theme)=>({
    modal:{
       position:'absolute',
       width: 400,
       backgroundColor: theme.palette.background.paper,
       border: '2px solid #000',
       boxShadow: theme.shadows[5],
       padding:theme.spacing(2,4,3),
       top: '50%',
       left: '50%',
       transform: 'translate(-50% , -50%)'
    },
    icones:{
       cursor: 'pointer'
    },
    inputMaterial:{
        width: '100%'
    }
}))


function Car () 
{
const styles = useStyles();
const [works, setWorks] = useState([]);

const [modalEdit , setmodalEdit] = useState(false);
const [modalInsert , setmodalInsert] = useState(false);
const [modalDelete , setmodalDelete] = useState(false);

const [canselselected , setcanselselected] = useState({
    model:'' ,
    reg_number:'' ,
    model_year:'' ,
    is_auto:'' ,
    oil_type:'' ,
    image:'' ,
    car_type_id:'' ,
    is_active:''  
})
//----------------  GET ----------------------------------


const getAll = async()=>{
 await axios.get(baseurl)
 .then(response=>{
     setWorks(response.data);
 })
}
useEffect(async()=>{
    await getAll();
})
//----------------------------------------------------------------------
const edit = async()=>{
    await axios.put(baseurl +'/'+ canselselected.id , canselselected)
    .then(response=>{
        var datn = works;

        console.log(datn);
        datn.map(workItem=>{
            if(canselselected.id === workItem.id){
                workItem.modal = canselselected.modal;
                workItem.reg_number = canselselected.reg_number;
                workItem.model_year = canselselected.model_year;
                workItem.is_auto = canselselected.is_auto;
                workItem.oil_type = canselselected.oil_type;
                workItem.image = canselselected.image;
                workItem.car_type_id = canselselected.car_type_id;
                workItem.is_active = canselselected.is_active;
            }
        })
        setWorks(datn);
        abrirCerrarModalEdit();
    })
  }





  

  const deletee = async()=>{
    await axios.delete(baseurl +'/'+ canselselected.id)
    .then(response=>{
        setWorks(works.filter(workItem=>workItem.id !== canselselected.id));
        abrirCerrarModalDelete();
    })
  }
//------------------- Add --------------------------
  const add = async()=>{
      /*const mm =  {
        "id" : 9,
        "model": "lada9",
        "reg_number": "1111",
        "model_year": "2004",
        "is_auto": "no",
        "oil_type": "sadkyp",
        "image": "img",
        "car_type_id": "8",
        "is_active": "no"
    }*/
     await axios.post(baseurl , canselselected )
    .then(response=>{
        setWorks(works.concat(response.data));
        abrirCerrarModalInsert();
    })
   //console.log(mm);
 }


const handelchange= e=>{
    const {name , value}=e.target;
    setcanselselected(prevstate =>({
        ...prevstate,
        [name]: value
    }))
    console.log(canselselected);
}


const abrirCerrarModalInsert=()=>{
    setmodalInsert(!modalInsert);
}
//---------------------- Delete-----------------------------------------------------
const abrirCerrarModalDelete=()=>{
    setmodalDelete(!modalDelete);
}

//----------------------- Edit ------------------------


const abrirCerrarModalEdit=()=>{
    setmodalEdit(!modalEdit);
}

/*const editConsola=(workItem , caso)=>{
    setcanselselected(workItem);
    (caso == 'Editar')&&setmodalEdit(true)
}*/

//delete

const editConsola=(workItem , caso)=>{
    setcanselselected(workItem);
    (caso == 'Editar')?abrirCerrarModalEdit():abrirCerrarModalDelete()
}

//--------------------------------------------------
const bodyInsert=(
    <div className={styles.modal}>
        <h3 align='center'> Add</h3>
        <TextField name="model" className={styles.inputMaterial} label="model" onChange={handelchange} ></TextField>
        <br/>
        <TextField name="reg_number" className={styles.inputMaterial} label="reg_number" onChange={handelchange}></TextField>
        <br/>
        <TextField name="model_year" className={styles.inputMaterial} label="model_year" onChange={handelchange}></TextField>
        <br/>
        <TextField name="is_auto" className={styles.inputMaterial} label="is_auto" onChange={handelchange}></TextField>
        <br/>
        <TextField name="oil_type" className={styles.inputMaterial} label="oil_type" onChange={handelchange}></TextField>
        <br/>
        <TextField name="image" className={styles.inputMaterial} label="image" onChange={handelchange}></TextField>
        <br/>
        <TextField name="car_type_id" className={styles.inputMaterial} label="car_type_id" onChange={handelchange}></TextField>
        <br/>
        <TextField name="is_active" className={styles.inputMaterial} label="is_active" onChange={handelchange} ></TextField>

        <br/><br/>

        <div align="right">
            <Button color="primary" onClick={()=>add()} >Insert</Button>
            <Button onClick={()=>abrirCerrarModalInsert()} >Cansel</Button>
        </div>
    </div>
)
//--------------------------------------------------
const bodyEdit=(
    <div className={styles.modal}>
        <h3 align='center'> Edit</h3>
        <TextField name="model" className={styles.inputMaterial} label="model" onChange={handelchange} value={canselselected && canselselected.model}></TextField>
        <br/>
        <TextField name="reg_number" className={styles.inputMaterial} label="reg_number" onChange={handelchange} value={canselselected && canselselected.reg_number}></TextField>
        <br/>
        <TextField name="model_year" className={styles.inputMaterial} label="model_year" onChange={handelchange} value={canselselected && canselselected.model_year}></TextField>
        <br/>
        <TextField name="is_auto" className={styles.inputMaterial} label="is_auto" onChange={handelchange} value={canselselected && canselselected.is_auto}></TextField>
        <br/>
        <TextField name="oil_type" className={styles.inputMaterial} label="oil_type" onChange={handelchange} value={canselselected && canselselected.oil_type}></TextField>
        <br/>
        <TextField name="image" className={styles.inputMaterial} label="image" onChange={handelchange} value={canselselected && canselselected.image}></TextField>
        <br/>
        <TextField name="car_type_id" className={styles.inputMaterial} label="car_type_id" onChange={handelchange} value={canselselected && canselselected.car_type_id}></TextField>
        <br/>
        <TextField name="is_active" className={styles.inputMaterial} label="is_active" onChange={handelchange} value={canselselected && canselselected.is_active} ></TextField>

        <br/><br/>

        <div align="right">
            <Button color="primary" onClick={()=>edit()}>Edit</Button>
            <Button onClick={()=>abrirCerrarModalEdit()}>Cansel</Button>
        </div>
    </div>
)
//--------------------------------------------------
const bodyDelete=(
    <div className={styles.modal}>
        <p> delete  <b> {canselselected && canselselected.modal}</b> ? </p>
        <div align="right">
            <Button color="secondary" onClick={()=>deletee()}>yes</Button>
            <Button onClick={()=>abrirCerrarModalDelete()}>no</Button>
        </div>
    </div>
)
//--------------------------------------------------
  return ( 
   <div className="Car">
       <br/>
       <Button onClick={()=>abrirCerrarModalInsert()}>Insert</Button>
       <TableContainer>
         <Table>
             <TableHead>
               <TableRow>
                   <TableCell> model </TableCell>
                   <TableCell> reg_number </TableCell>
                   <TableCell> model_year </TableCell>
                   <TableCell> is_auto </TableCell>
                   <TableCell> oil_type </TableCell>
                   <TableCell> image </TableCell>
                   <TableCell> car_type_id </TableCell>
                   <TableCell> is_active </TableCell>
               </TableRow>
             </TableHead>

             <TableBody>
                 {works.map(workItem=>(
                     <TableRow key={workItem.id}>
                         <TableCell>{workItem.model}</TableCell>
                         <TableCell>{workItem.reg_number}</TableCell>
                         <TableCell>{workItem.model_year}</TableCell>
                         <TableCell>{workItem.is_auto}</TableCell>
                         <TableCell>{workItem.oil_type}</TableCell>
                         <TableCell>{workItem.image}</TableCell>
                         <TableCell>{workItem.car_type_id}</TableCell>
                         <TableCell>{workItem.is_active}</TableCell>
                         <TableCell>
                             <Edit className={styles.icones}    onClick={()=>editConsola(workItem , 'Editar')}/>
                               &nbsp;&nbsp;&nbsp;
                             <Delete className={styles.icones}  onClick={()=>editConsola(workItem , 'delete')} />
                         </TableCell>
                     </TableRow>
                 ))}
             </TableBody>
         </Table>
       </TableContainer>

       <Modal
         open={modalInsert}
         onclose={()=>abrirCerrarModalInsert()}>
         {bodyInsert}
       </Modal>

       <Modal
         open={modalEdit}
         onclose={()=>abrirCerrarModalEdit()}>
         {bodyEdit}
       </Modal>


       <Modal
         open={modalDelete}
         onclose={()=>abrirCerrarModalDelete()}>
         {bodyDelete}
       </Modal>


       
   </div>
  );
}

export default Car;
/*
      onClick={()=>editConsola(workItem , 'Editar')}

       <Modal
         open={modalEdit}
         onclose={()=>abrirCerrarModalEdit()}>
         {bodyEdit}
       </Modal>
       */