import { Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const StateBasics = () => {
    //useState hook syntax
    // var [varname, function name] = useState('my initial value')
var [myCar, setMyCar] = useState('BMW')
var[name,setName]=useState()
var[out,setOut]=useState()

const changeCar = () => {
    setMyCar('Audi')
    
};
const inputVal=(e)=>{
    setName(e.target.value)
    console.log(e.target.value);
};
const addName=()=>{
    setOut(name)
}
  return (
    <div>
      <Typography variant="h4" >
        welcome {myCar}
      </Typography>
      <Button variant="contained" onClick={changeCar}>Change</Button>

      {/* inline function */}
      
            <Button variant="contained" onClick={() => setMyCar('Tesla')}>switch</Button><br /><br /><br />
            <Typography variant='h3'>Hello {out}</Typography>
            <TextField  variant="outlined" label="enter Name" onChange={inputVal}></TextField><br /><br />
            <Button variant="contained" onClick={addName}>Add</Button>

    </div>
  )
}

export default StateBasics
