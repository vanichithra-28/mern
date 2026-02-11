import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var [count,setCount]=useState(0); 
const increment=()=>{
    setCount(count+1);
}
const decrement=()=>{
    setCount(count-1);
}
  return (
    <div>
      <Typography variant='h3'>Count: {count}</Typography>
      <Button variant="contained" color='success' onClick={increment}>+</Button>&nbsp;
     <Button variant="contained" color='error' onClick={decrement}>-</Button>  
    </div>
  )
}

export default Counter
