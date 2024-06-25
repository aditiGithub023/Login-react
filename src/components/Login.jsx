import React from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Warning from "./Warning";
import SuccessFull from "./SuccessFull";

function Login() {
  let [enteredValue, setEnteredValues] = useState({
    username: "",
    password: "",
    checkbox: true,
  });
  const [open, setOpen] = useState({
    warning:false,
    successFull:false
  });
  const handleSubmit = (event) => {
    event.preventDefault();
   let {username,password,checkbox}=enteredValue;
   if(username==="" || password==="" || checkbox=== false )
    {
      // Warning
      setOpen({...open,warning:true});
    }else{
      setOpen({...open,successFull:true});
    console.log(enteredValue);
    }
     
  };

  const handleInput = (identifier, value) => {
    setEnteredValues((prev) => {
      return { ...prev, [identifier]: value };
    });

  };
  return (
    <Container component="form" onSubmit={handleSubmit}>
      <Grid container spacing={3} sx={{ display: "grid" }}>
        <Grid item xs={12}>
      
          <TextField
            id="filled-basic-username"
            label="Username"
            variant="filled" 
            fullWidth
            value={enteredValue.username}
            onChange={(e) => {
              handleInput("username", e.target.value);
            }}
            sx={{bgcolor:"white",borderRadius:"1px solid white"}}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="filled-basic-password"
            label="Password"
            variant="filled"
            type="password"
            fullWidth
            value={enteredValue.password}
            onChange={(e) => {
              handleInput("password", e.target.value);
              
            }}
            sx={{bgcolor:"white",borderRadius:"1px solid white"}}
          />
        </Grid>
        <Grid item xs={12}>
          <Box mx={-1}>
            <Checkbox
            color="success"
              inputProps={{ "aria-label": "controlled" }}
             checked={enteredValue.checkbox}
              onChange={(e) => {
                handleInput("checkbox", e.target.checked);
              }}
              sx={{color:"white"}}
            />
            <Typography variant="caption" gutterBottom sx={{color:"white"}}>
              Remember Me
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="success" sx={{margin:"1rem 0 2rem 0",borderRadius:"25px"}}>
        Login
      </Button>
      <Warning setOpen={setOpen} open={open} />
      <SuccessFull setOpen={setOpen} open={open} />
    </Container>
  );
}

export default Login;
