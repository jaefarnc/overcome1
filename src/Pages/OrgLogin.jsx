import React, { useState, useEffect } from 'react';

import { Box, TextField, Container, Button, Typography } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../UserContext';
export default function OrgLogin() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const { logino, org } = useUser();
  function handleChange(event) {
    if (password < 8)
      console.log("Password is weak");
    else {

      const userData = { username: username, password: password };

      logino(userData);
      if (username === "TechCorp")
        navigate('/OrgPage1');
      else
        navigate('/OrgPage2');
    }
  }
  useEffect(() => {

    if (org !== null)
      navigate('/OrgPage');

  })
  return (

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
        maxHeight: 700,
        textAlign: 'center',

        bgcolor: '#f5f5f5',

      }}>
        <Typography variant="h5" >
          Organisation Login
        </Typography>
        <TextField
          id="filled-password-input"
          label="Username"
          type="username"
          autoComplete="current-password"
          variant="filled"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          fullWidth

          sx={{ mt: 4, mb: 4 }}
        />
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password}
          onChange={(e) => { setpassword(e.target.value) }}
          fullWidth
          sx={{ mb: 4 }}

        />

        <Button onClick={handleChange} type="submit" variant="contained" color="primary" size="large" sx={{ mb: 5, height: 50, width: 200 }}>
          Login
        </Button>
        <Box sx={{ mb: 2 }}>
          <span>Don't have an account? <Link to="/OrgRegister">Register</Link></span>
        </Box>
        <Box >
          <span>Not an Organization? <Link to="/UserLogin">Login as User</Link></span>
        </Box>
      </Box>
    </Container>

  )

}
