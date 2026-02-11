import { Button, Typography } from "@mui/material";
import React, { useState } from "react";

const Example = () => {
    var[button,setButton]=useState()

const changeHome=()=>{
    setButton('Home Page')
}
const changeAbout=()=>{
    setButton('About us')
}
const changeContact=()=>{
    setButton('Contact us')
}
  return (
    <div>
      <Typography variant="h4">Welcome to {button}</Typography>
      <Button variant="contained" color="secondary" onClick={changeHome}>
        Home
      </Button>&nbsp;
      <Button variant="contained" color="success"onClick={changeAbout}>
        About
      </Button>&nbsp;

      <Button variant="contained" color="warning"onClick={changeContact}>
        contact
      </Button>
    </div>
  );
};

export default Example;
