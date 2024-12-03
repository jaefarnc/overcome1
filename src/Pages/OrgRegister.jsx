import React, {useState,useEffect} from 'react';
import {Box,TextField,Container,Button, Typography} from '@mui/material';
import {Link,useNavigate} from "react-router-dom";
import {useUser} from '../UserContext';

export default function OrgRegister()
{
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [reenterpassword,setreenterpassword]=useState("");
    const navigate=useNavigate();
    const { logino, org } = useUser();
    function handleChange(event)
    {
        if(password<8)
          console.log("Password is weak");
        else if(password!==reenterpassword)
          console.log("Passwords don't match");
        else
        {
          const userData={username:username,password:password};
          console.log(userData);
            logino(userData);
            navigate('/OrgEdit');
        }
    }
    useEffect(()=>{
      
      if(org!==null)
        navigate('/OrgPage');
    })

   return(
    
    <Container
    maxWidth="sm"
    sx={{

      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: "80vh",
      transform: 'translateY(10vh)',
      
    }}
    
    >
        <Box sx={{
            p: 4,
            width: '100%',
            maxWidth: 300,
            maxHeight:700,
            textAlign: 'center',
          
            bgcolor:'#f5f5f5',
          
           }}>
            <Typography variant="h5" >
               Organization Registration
            </Typography>
         <TextField
          id="filled-password-input"
          label="Username"
          type="username"
          value={username}
          onChange={(e)=>{setusername(e.target.value)}}
          autoComplete="current-password"
          variant="filled"
          fullWidth
          sx={{mt:4,mb:4}}
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          autoComplete="current-password"
          variant="filled"
          fullWidth
          sx={{mb:4}}

        />
         <TextField
          id="filled-password-input"
          label="Re-enter password"
          type="password"
          value={reenterpassword}
          onChange={(e)=>{setreenterpassword(e.target.value)}}
          autoComplete="current-password"
          variant="filled"
          fullWidth
         sx={{mb:4}}
        />
             <Button onClick={(e)=>{handleChange(e)}} type="submit" variant="contained" color="primary" size="large"sx={{ mb:5 ,height:50,width:200}}>
              Register
            </Button>
            <Box sx={{mb:2}}>
              <span>Already have an account? <Link to="/OrgLogin">Login</Link></span>
            </Box>
            <Box >
              <span>Not an Organization? <Link to="/UserReg">Register as User</Link></span>
            </Box>
        </Box>
        </Container>

    )
    
}