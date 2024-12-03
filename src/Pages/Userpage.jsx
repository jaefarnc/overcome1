import React ,{useState,useEffect,useParams}from 'react';
import { Container, Typography,Stack,Paper,Avatar,IconButton,Toolbar,AppBar,Box,Popover,Button,List,Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit'
import {Link,useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid2';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import { useUser } from '../UserContext';

export default function UserPage()
{
  
    const [anchorEl, setAnchorEl] = useState(null);
    const {user,info,fetchProfile,login,logout}=useUser();
    const navigate=useNavigate();
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      console.log(login);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
   
    useEffect(() => {
        if (user === null) {
            console.log(user);
            navigate('/UserLogin');
        }
      
    },[user,navigate]);
    
   
    
   return(
    <>
   
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="sticky" sx={{
        width: '100%',
          top: 0, 
        zIndex: 1000, 
        height:60,
      }}>
        
      <Toolbar variant="dense" sx={{justifyContent:"space-between"}}>
      <Stack direction="row" alignItems="center">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={3} sx={{ mr: 2 }}> 
            <EmailIcon />
            <WorkIcon />
            <Avatar sx={{ bgcolor: "blue"}}onClick={handleClick}>KJ</Avatar>
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
          <Avatar sx={{ bgcolor: "blue"}}>KJ</Avatar>
          <Button onClick={(e)=>{navigate('/UserEdit')}}>Edit Profile</Button>
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
    
    <Grid container  sx={{ bgcolor: "grey", width:'100%' }} rowSpacing={2}>
      
        <Grid item xs={12}>
        <Paper elevation={2} sx={{padding:3,width:'100%',minWidth:700 }}>
            <Stack direction="row" alignItems="center" justifyContent={'space-between'}>
            <Grid item xs={12}>
       <Avatar sx={{ bgcolor: "blue",minHeight:100,minWidth:100}}>KJ</Avatar>
       </Grid>
                <Typography variant="h5">
                    {
                        <div>
                        { info?.firstName + " " || ""}
                        { info?.middleName + " " || ""}
                        { info?.lastName + " " || ""}
                        
                        </div>
                    }
                </Typography>
                <Link to='/UserEdit'>
                    <EditIcon />
                </Link>
            </Stack>
            </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{padding:3,width:'100%',minWidth:700} }>
           
           <Typography variant="h5">
            About
           </Typography>
           <Typography sx={{padding:2}}>
            {
                <div>
                 { info?.about&&info.about!==null? info.about : "Nothing here"}
                 </div>
            }
           </Typography>
        </Paper>
        
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{padding:3,width:'100%',minWidth:700} }>
           
           <Typography variant="h5" >
            Experience
           </Typography>
           <Typography>
           
           {
            info?.experience&&info.experience.length>0?(info.experience.map((e, index) => ( 
            <Stack key={index} direction="row" >
       <List sx={{padding:2}}>
        {e.role} <br />
        {e.company} <br />
        {e.startDate.format('MMM D, YYYY')} - {e.endDate.format('MMM D, YYYY')} <br />
        {e.location} 
        <Divider component="li" sx={{width:"650px",mt:2}}/>
      </List>
     
    </Stack>)
  )):(<Typography sx={{padding:2}}>
    Nothing here
   </Typography>)
   }
           </Typography>
        </Paper>
        
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{padding:3,width:'100%',minWidth:700} }>
           
           <Typography variant="h5" >
            Education
           </Typography>
           <Typography >
           {
            info?.education&&info.education.length>0?(info.education.map((e, index) => ( 
            <Stack key={index} direction="row" >
       <List sx={{padding:2}}>
        {e.school} <br />
        {e.degree} <br />
        {e.field} <br/>
        {e.startDate.format('MMM D, YYYY')} - {e.endDate.format('MMM D, YYYY')} <br />
        {e.grade}
        <Divider component="li" sx={{width:"650px"}}/>
      </List>
     
    </Stack>)
  )):(<Typography sx={{padding:2}}>
    Nothing here
   </Typography>)}
           </Typography>
        </Paper>
        
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{padding:3,width:'100%',minWidth:700} }>
           
           <Typography variant="h5">
            Skills
           </Typography>
           <Typography  sx={{mt:1}}>
              {
                      info?.skills&&info.skills.length>0?(info.skills.map((e,index) =>
                      <Stack key={index} direction="row" spacing={5}>
                        <List sx={{ fontSize: '1.2em' ,color:"black",padding:2}}>
                            {e}
                            <Divider component="li" sx={{width:"600px"}}/>
                        </List> 
                       
                      </Stack>
                      ))
                      :(
                      <Typography sx={{padding:2}}>
                        Nothing here
                        </Typography>)
                      
                }
                
           </Typography>
        </Paper>
        
        </Grid>
    </Grid>
    
   
</Container>
</>
   );
}