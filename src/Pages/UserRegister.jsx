import React, {useState,useEffect} from 'react';
import {Box,TextField,Container,Button, Typography} from '@mui/material';
import {Link,useNavigate} from "react-router-dom";
import {useUser} from "../UserContext";
import { userregisterRoute } from '../api/routes';
import axios from 'axios';
export default function UserRegister()
{
  const {user,login}=useUser();
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [reenterpassword,setreenterpassword]=useState("");
    const navigate=useNavigate();

   async function handleChange(event)
    {
        if(password<8)
          console.log("Password is weak");
        else if(password!==reenterpassword)
          console.log("Passwords don't match");
        else
        {
          try
          {
            const {data}=await axios.post(userregisterRoute,{username,password});
            if(data.status==false)
            {
              console.log("Cannot register");
            }
            else
            {
          const userData={username:username,password:password};
            login(userData);
            navigate('/UserEdit');
            }
          }
          catch(err)
          {
            console.log(err);
          }
        }
    }
    useEffect(()=>{
      if(user!==null)
        navigate('/UserPage')
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
            <Typography variant="h4" >
               User Registration
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
             <Button onClick={handleChange} type="submit" variant="contained" color="primary" size="large"sx={{ mb:4 ,height:50,width:200}}>
              Register
            </Button>
            <Box sx={{mb:2}}>
              <span>Already have an account? <Link to="/UserLogin">Login</Link></span>
            </Box>
            <Box >
              <span><Link to="/OrgRegister">Register as organisation</Link></span>
            </Box>
        </Box>
        </Container>

    )
    
}
