import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import green from "./assets/green.jpg"

import Typography from "@mui/material/Typography";
import Login from './Login';


function LayOut() {
  return (
    <Container maxWidth="md" >
       
        <Box sx={{ bgcolor: 'black', height: {md:'80vh',xs:"fit-content"},borderRadius:"25px" }} my={5} >
        <Grid container spacing={0} >
        <Grid item md={6} xs={12}>
          <Box
            sx={{
              backgroundImage: `url(${green})`,
              backgroundRepeat: "repeat",
              backgroundColor: "green",
              backgroundSize: "cover",
              borderRadius:{md:"25px 0px 0px 25px",xs:"25px 25px 0px 0"},
              minHeight: {
                xs: "20vh", // Mobile 
                md: "80vh", // Desktop 
              },
              width:"100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            
            }}
          >
          </Box>
        </Grid>
        <Grid item md={6} xs={12} 
        // sx={{backgroundColor:"red"}}
        color="primary"
      
        >
           <Typography variant="h5" gutterBottom  sx={{textAlign:"center",margin:"1rem",color:"white"}}>
                Register Now
              </Typography>
              <Login />
        </Grid>
      </Grid>
        </Box>
   
  
      </Container>
     
  )
}

export default LayOut