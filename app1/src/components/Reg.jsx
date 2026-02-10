import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Reg = () => {
  return (
    <div>
           <Typography variant='h4' color='secondary'>Register Now</Typography><br />
        <TextField label='Name' variant='outlined' color='primary' type='text' />
        <br /><br />
        <TextField label='Place' variant='outlined' color='primary' type='text' />
        <br /><br />
         <TextField label='age' variant='outlined' color='primary' type='text' />
        <br /><br />
         <TextField label='gender' variant='outlined' color='primary' type='text' />
        <br /><br />
         <TextField label='username' variant='outlined' color='primary' type='text' />
        <br /><br />
         <TextField label='password' variant='outlined' color='primary' type='password' />
        <br /><br />
            <Button variant='contained' color='secondary'>Submit</Button>
            
    </div>
  )
}

export default Reg
