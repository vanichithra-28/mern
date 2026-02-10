import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const login = () => {
  return (
    <div>
        <h1>Login</h1>
      <input type="text" placeholder='username'  /> <br /><br />
     <input type="password" placeholder='password'/><br /><br />
     <button>Submit</button>
     <br /><br /><br /><br />

     <Typography variant='h1'>Login</Typography>
     <TextField label='Username' variant='outlined' color='primary' type='text' />
     <br /><br />
     <TextField label='Password' variant='standard' color='primary' type='password' />
     <br /><br />
     <TextField label='email' variant='filled' color='primary' type='email' />
     <br /><br />
     <Button variant='contained' color='secondary'>Submit</Button>
     <Button variant='outlined' color='secondary'>Submit</Button>  
<Button variant='text' color='secondary'>Submit</Button>
    </div>
  )
}

export default login
