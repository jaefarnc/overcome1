import React,{useEffect} from 'react';
import { Container,Box, Dialog,DialogActions,DialogContent,DialogTitle,Typography,TextField,Button,Stack,IconButton,List,Divider} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {LocalizationProvider,DesktopDatePicker} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {useUser} from '../UserContext';
import { useState } from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
export default function UserEdit()
{
  const {info,addInfo,user}=useUser();
    const [skills,setskills]=useState(info?.skills||[]);
    const [skill,setskill]=useState("");
    const [open, setOpen] = useState(false);

    //Education
    const [education,setEducation]=useState(info?.education||[])
    const [school,setSchool]=useState("");
    const [degree,setDegree]=useState("");
    const [field,setField]=useState("");
    const [grade,setGrade]=useState("");
   
    //Experience
    const [experience,setExperience]=useState(info?.experience||[])
    const [role,setRole]=useState("");
    const [company,setCompany]=useState("");
    const [location,setLocation]=useState("");
    const [description,setDescription]=useState("");
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    console.log(dayjs());
    
    const [opened,setOpened]=useState(false);
    const submitExperience =()=>{
      console.log({
        role,
        company,
        location,
        startDate,
        endDate,
        description
      });
      setExperience((prevExp)=>[...prevExp,
                                {"role":role,
                                  "company":company,
                                  "location":location,
                                  "startDate":startDate,
                                  "endDate":endDate,
                                  "description":description
                                }])
      setRole("");
      setCompany("");
      setLocation("");
      setStartDate(dayjs());
      setEndDate(dayjs());
      setDescription("");
      
    }

    const submitEducation =()=>{
      setEducation((prevExp)=>[...prevExp,
                                {"school":school,
                                  "degree":degree,
                                  "field":field,
                                  "startDate":startDate,
                                  "endDate":endDate,
                                  "grade":grade
                                }])
      setSchool("");
      setDegree("");
      setField("");
      setStartDate(dayjs());
      setEndDate(dayjs());
      setGrade("");
      console.log(experience);
    }

    const handleDeleteExperience = (index) => {
      setExperience((prevExperience) =>
        prevExperience.filter((_, i) => i !== index)
      );
    };

    const handleDeleteEducation=(index)=>{
      setEducation((prevEducation)=>
      prevEducation.filter((_,i)=>i!==index)
    )
    }

    const handleDeleteSkills=(index)=>{
      setskills((prevSkills)=>
      prevSkills.filter((_,i)=>i!==index)
    )
    }

   const navigate=useNavigate();
   useEffect(()=>{
  if(user===null)
   {
     console.log(user);
      navigate("/UserLogin");
   }
   },[user,navigate]);
    const handleClickOpened = () => {
        setOpened(true);
      };
      const handleClosed = () => {
        setOpened(false);
      };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return(
        <Container
        maxWidth="sm"
        sx={{
    
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: "100vh",
         height:'auto',
          transform: 'translateY(10vh)',
          
        }}
        
        >
            <Box sx={{
                p: 4,
                width: '100%',
                maxWidth: 400,
                
                textAlign: 'center',
              
                bgcolor:'#f5f5f5',
              
               }}>
                <Typography variant="h4" sx={{mb:4}}>
                  Edit User Profile
                </Typography>
                <Typography  align="left" sx={{mb:1}}>
                    First Name
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{ addInfo("firstName",e.target.value) }}
                         defaultValue={info?.firstName || ""}
                />
                 <Typography align="left" sx={{mb:1}}>
                    Middle Name
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{ addInfo("middleName",e.target.value) }}
                            defaultValue={info?.middleName || ""}
                />
                 <Typography align="left" sx={{mb:1}}>
                     Last Name
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{ addInfo("lastName",e.target.value) }}
                           defaultValue={info?.lastName || ""}
                           
                />
                <Typography align="left" sx={{mb:1}}>
                    About
                </Typography>
                <TextField
                 id="outlined-textarea"
                 multiline
                 fullWidth
                 sx={{mb:3}}
                 onChange={(e)=>{ addInfo("about",e.target.value)}}
                 defaultValue={info?.about || ""}
                />
                <Box>
                <Typography align="left" sx={{mb:1}}>
                    Skills
                </Typography>
                <Stack direction="row" spacing={4} sx={{mb:3}}>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           name="skill"
                           onChange={(e)=>{setskill(e.target.value)}}
                           fullWidth
                           sx={{mb:2}}
                />
                <Button size="small" variant="outlined" color="primary"
                 onClick={(e)=>{
                  setskills(prevSkills=>[...prevSkills,skill])
                  setskill("")}}>Add</Button>
                </Stack>
               
                {
                
                      skills.map((value,index) =><><Stack key={index} direction="row" spacing={37}sx={{padding:1}}><List style={{ fontSize: '1.5em' ,color:"black"}}>
                            {value}
                        </List> 
                        <IconButton aria-label="delete" size="medium" onClick={()=>{handleDeleteSkills(index)}}>
                        <DeleteIcon fontSize='medium' />
                        
                      </IconButton>
                      
                     
                      </Stack>
                      </>
                      )
                }
              
        
    <Stack direction="row" spacing={29} >
        <Typography variant="h6" align='left'>
         Experience
        </Typography>
        <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            handleClose();
          },
        }}
      >
        <DialogTitle>Add Experience</DialogTitle>
        <DialogContent>
          
        <TextField
            autoFocus
            required
            margin="dense"
            name="Role"
            label="Role"
            fullWidth
            variant="standard"
            sx={{mb:2}}
            onChange={(e)=>{setRole(e.target.value)}}
          />
           <TextField
            autoFocus
            required
            margin="dense"
            name="Company"
            label="Company/Organisation"
            fullWidth
            variant="standard"
            sx={{mb:2}}
            onChange={(e)=>{setCompany(e.target.value)}}
          />
           
           <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
                <DesktopDatePicker
                    label="Start date"
                  onChange={(e) => { if (e) setStartDate(e);}}
                />
                <Typography variant="h5">
                    -
                </Typography>
                <DesktopDatePicker
                    label="End date"
                 onChange={(e) => {if(e)setEndDate(e);}} 
                />
            </Stack>
        </LocalizationProvider>
        <TextField
            autoFocus
            required
            margin="dense"
            name="Location"
            label="Location"
            fullWidth
            variant="standard"
            sx={{mb:2}}
            onChange={(e)=>{setLocation(e.target.value)}}
          />
          <Typography>
            Descirption (Optional)
          </Typography>
          <TextField
                 id="outlined-textarea"
                 multiline
                 fullWidth
                 sx={{mb:3}}
                 onChange={(e)=>{setDescription(e.target.value)}}
                />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onClick={submitExperience}>Add</Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
     
        </Stack> 

        <Typography>
        {
            experience&&experience.length>0?(experience.map((e, index) => ( 
            <Stack key={index} direction="row"  >
       <List sx={{padding:2,fontSize:"1.2em"}} align='left'>
        {e.role} <br />
        {e.company} <br />
        {dayjs.isDayjs(e.startDate) ? e.startDate.format('MMM D, YYYY') : 'Invalid date'} - 
      {dayjs.isDayjs(e.endDate) ? e.endDate.format('MMM D, YYYY') : 'Invalid date'} <br />
        {e.location} 
        <Divider component="li" sx={{width:"300px",mt:2}}/>
      </List>
      <IconButton aria-label="delete" size="medium" >
        <DeleteIcon fontSize="medium" onClick={()=>{handleDeleteExperience(index)}}/>
      </IconButton>
    </Stack>
    )
  )):(<Typography sx={{padding:2}}>
    Nothing here
   </Typography>)
   }     
      </Typography>
  

        <Stack direction="row" sx={{ml:5}} spacing={25.5}>
        <Typography variant="h6">
         Education
        </Typography>
        <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpened}>
        +
      </Button>
      <Dialog
        open={opened}
        onClose={handleClosed}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClosed();
          },
        }}
      >
        <DialogTitle>Add Education</DialogTitle>
        <DialogContent>
          
          <TextField
            autoFocus
            required
            margin="dense"
            name="School"
            label="University/School"
            fullWidth
            variant="standard"
            onChange={(e)=>setSchool(e.target.value)}
          />
           <TextField
            autoFocus
            required
            margin="dense"
            name="Degree"
            label="Degree"
            fullWidth
            variant="standard"
            onChange={(e)=>setDegree(e.target.value)}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            name="Study"
            label="Field of study"
            fullWidth
            variant="standard"
            onChange={(e)=>{setField(e.target.value)}}
            sx={{mb:2}}
          />
           
           <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack direction="row" spacing={2}>
                <DesktopDatePicker
                    label="Start date"
                    value={startDate}
                   onChange={(e) => setStartDate(e.target.value)}
                />
                <Typography variant="h5">
                    -
                </Typography>
                <DesktopDatePicker
                    label="End date"
                    value={endDate}
                   onChange={(e) => setEndDate(e.target.value)}
                />
            </Stack>
        </LocalizationProvider>
        <TextField
            autoFocus
            required
            margin="dense"
            name="Grade"
            label="Grade"
            fullWidth
            variant="standard"
            sx={{mb:2}}
            onChange={(e)=>{setGrade(e.target.value)}}
          />
         
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosed}>Cancel</Button>
          <Button type="submit" onClick={submitEducation}>Add</Button>
        </DialogActions>
      </Dialog>
      </React.Fragment>
        </Stack>       
        </Box>
        <Typography>
        {
            education&&education.length>0?(education.map((e, index) => ( 
            <Stack key={index} direction="row"  >
       <List sx={{padding:2,fontSize:"1.2em"}} align='left'>
        {e.school} <br />
        {e.degree}<br/>
        {e.field} <br />
        {dayjs.isDayjs(e.startDate) ? e.startDate.format('MMM D, YYYY') : 'Invalid date'} - 
        {dayjs.isDayjs(e.endDate) ? e.endDate.format('MMM D, YYYY') : 'Invalid date'} <br />
        {e.grade} 
        <Divider component="li" sx={{width:"300px",mt:2}}/>
      </List>
      <IconButton aria-label="delete" size="medium" >
        <DeleteIcon fontSize="medium" onClick={()=>{handleDeleteEducation(index)}}/>
      </IconButton>
    </Stack>
    )
  )):(<Typography sx={{padding:2}}>
    Nothing here
   </Typography>)
   }     
      </Typography>
            <Button type="submit" onClick={(e)=>
              { addInfo("skills",skills);
                addInfo("experience",experience);
                addInfo("education",education);
                navigate('/Userpage')}} variant="contained" color="primary" size="large"sx={{ mb:4 ,height:50,width:200}}>
              Save changes
            </Button>
            
        
                
        </Box>
      </Container>
    );
    
}