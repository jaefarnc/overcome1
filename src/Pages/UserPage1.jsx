import React ,{useState,useEffect,useParams}from 'react';
import { Container, Typography,Stack,Paper,Avatar,IconButton,Toolbar,AppBar,Box,Popover,Button,List,Divider} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EditIcon from '@mui/icons-material/Edit'
import {Link,useNavigate} from "react-router-dom";
import Grid from '@mui/material/Grid2';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import { useUser } from '../UserContext';

export default function UserPage1()
{
    const userinfo=[
        {
          "username": "john_doe",
          "emailId": "john.doe@example.com",
          "firstName": "John",
          "middleName": "A",
          "lastName": "Doe",
          "password": "hashed_password_123",
          "about": "A software developer with 5 years of experience.",
          "experiences": [
            {
              "role": "Software Engineer",
              "company": "TechCorp",
              "startDate": "2019-06-01",
              "endDate": "2021-06-01",
              "location": "New York, NY"
            },
            {
              "role": "Senior Developer",
              "company": "Innovative Solutions",
              "startDate": "2021-07-01",
              "endDate": "2024-06-01",
              "location": "San Francisco, CA"
            }
          ],
          "educations": [
            {
              "school": "MIT",
              "degree": "B.Sc. in Computer Science",
              "field": "Computer Science",
              "startDate": "2015-08-01",
              "endDate": "2019-05-01",
              "grade": 90
            }
          ],
          "skills": [
            "Python",
            "JavaScript",
            "React"
          ]
        },
        {
          "username": "jane_smith",
          "emailId": "jane.smith@example.com",
          "firstName": "Jane",
          "middleName": "B",
          "lastName": "Smith",
          "password": "hashed_password_456",
          "about": "A data scientist with expertise in machine learning.",
          "experiences": [
            {
              "role": "Data Scientist",
              "company": "DataTech",
              "startDate": "2018-02-01",
              "endDate": "2021-02-01",
              "location": "Los Angeles, CA"
            },
            {
              "role": "Lead Data Scientist",
              "company": "AI Innovations",
              "startDate": "2021-03-01",
              "endDate": "Present",
              "location": "Austin, TX"
            }
          ],
          "educations": [
            {
              "school": "Stanford University",
              "degree": "M.Sc. in Data Science",
              "field": "Data Science",
              "startDate": "2016-09-01",
              "endDate": "2018-06-01",
              "grade": 95
            }
          ],
          "skills": [
            "Machine Learning",
            "R",
            "TensorFlow"
          ]
        }
      ]
  const info=userinfo[0];
    const [anchorEl, setAnchorEl] = useState(null);
    const {user,login,logout}=useUser();
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
   
   /* useEffect(() => {
        if (user === null) {
            console.log(user);
            navigate('/UserLogin');
        }
       
    },[user,navigate]);
    */
   
    
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
            info?.experiences&&info.experiences.length>0?(info.experiences.map((e, index) => ( 
            <Stack key={index} direction="row" >
       <List sx={{padding:2}}>
        {e.role} <br />
        {e.company} <br />
        {e.startDate} - {e.endDate} <br />
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
            info?.educations&&info.educations.length>0?(info.educations.map((e, index) => ( 
            <Stack key={index} direction="row" >
       <List sx={{padding:2}}>
        {e.school} <br />
        {e.degree} <br />
        {e.field} <br/>
        {e.startDate} - {e.endDate} <br />
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