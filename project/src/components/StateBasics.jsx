import { Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const StateBasics = () => {
    //useState hook syntax
    // var [varname, function name] = useState('my initial value')
var [myCar, setMyCar] = useState('BMW')
const changeCar = () => {
    setMyCar('Audi')
    
}
  return (
    <div>
      <Typography variant="h4" >
        welcome {myCar}
      </Typography>
      <Button variant="contained" onClick={changeCar}>Change</Button>
    </div>
  )
}

export default StateBasics
