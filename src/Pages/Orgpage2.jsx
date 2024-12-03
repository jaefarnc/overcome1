import React, { useState, useEffect } from 'react';
import { Container, Typography, Stack, Paper, Avatar, IconButton, Toolbar, AppBar, Box, Popover, Button, List, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit'
import { Link, useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid2';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import { useUser } from '../UserContext';

export default function OrgPage2() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { org, login, logout } = useUser();
  const orginfo = [
    {
      "orgName": "TechCorp",
      "emailId": "TechCorp",
      "password": "hashed_org_password_123",
      "description": "A leading tech company specializing in innovative solutions.",
      "overview": "TechCorp builds cutting-edge software solutions for businesses.",
      "industry": "Technology",
      "headquarters": "San Francisco, CA",
      "orgImg": "https://techcorp.com/logo.png",
      "locations": ["San Francisco, CA", "New York, NY"],
      "specialities": ["Cloud Computing", "AI Solutions"],
      "links": ["https://techcorp.com", "https://linkedin.com/company/techcorp"]
    },
    {
      "orgName": "Innovative Solutions",
      "emailId": "info@innovativesolutions.com",
      "password": "hashed_org_password_456",
      "description": "Providing innovative software solutions to businesses.",
      "overview": "Innovative Solutions helps businesses adopt the latest technologies to improve efficiency.",
      "industry": "Consulting",
      "headquarters": "New York, NY",
      "orgImg": "https://innovativesolutions.com/logo.png",
      "locations": ["New York, NY"],
      "specialities": ["Business Consulting", "IT Solutions"],
      "links": ["https://innovativesolutions.com"]
    }
  ];
  const info = orginfo[1];
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(login);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;



  return (
    <>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="sticky" sx={{
          width: '100%',
          top: 0,
          zIndex: 1000,
          height: 60,
        }}>

          <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
            <Stack direction="row" alignItems="center">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={3} sx={{ mr: 2 }}>
              <EmailIcon />
              <WorkIcon />
              <Avatar sx={{ bgcolor: "#c84734" }} onClick={handleClick}>O</Avatar>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Stack direction="column" alignItems="center" justifyContent="center" spacing={1}>
                  <Avatar sx={{ bgcolor: "#c84734" }}>O</Avatar>
                  <Button onClick={(e) => { navigate('/OrgEdit') }}>Edit Profile</Button>
                  <Button onClick={logout} >Logout</Button>
                </Stack>

              </Popover>

            </Stack>
          </Toolbar>

        </AppBar>

      </Box>

      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          bgcolor: "gray",
          minHeight: "100vh",
          paddingTop: 4,

        }}
      >

        <Grid container sx={{ bgcolor: "grey", width: '100%' }} rowSpacing={2}>

          <Grid item xs={12}>
            <Paper elevation={2} sx={{ padding: 3, width: '100%', minWidth: 700, maxWidth: 750 }}>
              <Stack direction="column">
                <Stack direction="row" alignItems="center" justifyContent={'space-between'}>
                  <Grid item xs={12}>
                    <Avatar sx={{ bgcolor: "#c84734", minHeight: 75, minWidth: 75, fontSize: "2rem" }}>O</Avatar>
                  </Grid>
                  <Typography variant="h5">
                    {
                      <div>
                        {info?.orgName + " " || ""}
                      </div>
                    }
                  </Typography>
                  <Link to='/OrgEdit'>
                    <EditIcon />
                  </Link>
                </Stack>
              </Stack>
              <Typography variant="h6" sx={{ padding: 2 }}>
                {
                  info?.description && info.description.length > 0 ? info.description : ""
                }
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ padding: 3, width: '100%', minWidth: 700, maxWidth: 750 }}>

              <Typography variant="h5">
                Overview
              </Typography>
              <Typography sx={{ padding: 2 }}>
                {
                  <div>
                    {info?.overview && info.overview !== null ? info.overview : "Nothing here"}
                  </div>
                }
              </Typography>
            </Paper>


          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ padding: 3, width: '100%', minWidth: 700 }}>

              <Typography variant="h5">
                Links
              </Typography>
              <Typography
                component="a"
                href={info?.links || "#"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  mb: 2,
                  color: 'blue',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {info?.links || ""}
              </Typography>
            </Paper>

          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ padding: 3, width: '100%', minWidth: 700 }}>

              <Typography variant="h6">
                Industry
              </Typography>
              <Typography sx={{ padding: 2 }}>
                {
                  <div>
                    {info?.industry && info.industry !== null ? info.industry : "Nothing here"}
                  </div>
                }
              </Typography>
              <Typography variant="h6">
                Company size
              </Typography>
              <Typography sx={{ padding: 2 }}>
                {
                  <div>
                    {info?.size && info.size !== null ? info.size : "Nothing here"}
                  </div>
                }
              </Typography>
              <Typography variant="h6">
                Headquarters
              </Typography>
              <Typography sx={{ padding: 2 }}>
                {
                  <div>
                    {info?.headquarters && info.headquarters !== null ? info.headquarters : "Nothing here"}
                  </div>
                }
              </Typography>
            </Paper>


          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ padding: 3, width: '100%', minWidth: 700 }}>

              <Typography variant="h5" >
                Locations
              </Typography>
              <Typography>
                {
                  info?.locations && info.locations.length > 0 ? (info.locations.map((e, index) =>
                    <Stack key={index} direction="row" spacing={5}>
                      <List sx={{ fontSize: '1.2em', color: "black", padding: 2 }}>
                        {e}
                        <Divider component="li" sx={{ width: "600px" }} />
                      </List>

                    </Stack>
                  ))
                    : (
                      <Typography sx={{ padding: 2 }}>
                        Nothing here
                      </Typography>)

                }
              </Typography>
            </Paper>

          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ padding: 3, width: '100%', minWidth: 700 }}>

              <Typography variant="h5" >
                Specialities
              </Typography>
              <Typography >
                {
                  info?.specialities && info.specialities.length > 0 ? (info.specialities.map((e, index) =>
                    <Stack key={index} direction="row" spacing={5}>
                      <List sx={{ fontSize: '1.2em', color: "black", padding: 2 }}>
                        {e}
                        <Divider component="li" sx={{ width: "600px" }} />
                      </List>

                    </Stack>
                  ))
                    : (
                      <Typography sx={{ padding: 2 }}>
                        Nothing here
                      </Typography>)

                }
              </Typography>
            </Paper>

          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ padding: 3, width: '100%', minWidth: 700, bgcolor: 'gray' }}>
            </Paper>

          </Grid>
        </Grid>


      </Container>
    </>
  );
}