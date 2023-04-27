import React,{useEffect,useState} from 'react'
import { TextField,Button } from '@mui/material'
import '../css/form.css'
import iframe from '../iframe.json'

const Form = () => {
const[Getpass,Setpass]=useState(null)
const[Geturl,Seturl]=useState((null))

useEffect(()=>{
    Setpass(iframe)
},[])

 const guardar =()=>{
   if(iframe.Pass === Getpass){
    iframe.url = Geturl

    console.log('hola')
   }
 } 

  return (
    <div className='FormContainer'>
      <TextField id="outlined-basic" label="url" variant="outlined" onChange={(e)=>Seturl(e.target.value)} />
      <TextField id="outlined-basic" label="clave" variant="outlined" onChange={(e)=>Setpass(e.target.value)} />
      <Button variant="contained" onClick={()=> guardar()}>Guardar</Button>
    </div>
  )
}

export default Form