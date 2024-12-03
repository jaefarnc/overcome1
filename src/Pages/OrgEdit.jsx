import React,{useEffect} from 'react';
import { Container,Box,Typography,TextField,Button,Stack,IconButton,List} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {useUser} from '../UserContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function OrgEdit()
{
  const {info,addInfo,org}=useUser();
   
   
    
   const [locations,setLocations]=useState(info?.locations||[]);
   const [location,setLocation]=useState("");

   const [specialities,setSpecialites]=useState(info?.specialities||[]);
   const [current,setCurrent]=useState("");

    const handleDeleteLocation=(index)=>{
      setLocations((prevLocation)=>
      prevLocation.filter((_,i)=>i!==index)
    )
    }

    const handleDeleteSpecialities=(index)=>{
      setSpecialites((prevSpecialities)=>
      prevSpecialities.filter((_,i)=>i!==index)
    )
    }

   const navigate=useNavigate();
   useEffect(()=>{
  if(org === null)
   {
      navigate("/OrgLogin");
   }
   
   });
    
    return (
        <>
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
                  Edit Company Profile
                </Typography>
                <Typography  align="left" sx={{mb:1}}>
                    Company Name
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{ addInfo("name",e.target.value) }}
                         defaultValue={info?.name || ""}
                />
                 <Typography align="left" sx={{mb:1}}>
                    Website links
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{ addInfo("links",e.target.value) }}
                            defaultValue={info?.links || ""}
                />
                 <Typography align="left" sx={{mb:1}}>
                     Description
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           multiline
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{ addInfo("description",e.target.value) }}
                           defaultValue={info?.description || ""}
                           
                />
                <Typography align="left" sx={{mb:1}}>
                    Overview
                </Typography>
                <TextField
                 id="outlined-textarea"
                 multiline
                 fullWidth
                 sx={{mb:3}}
                 onChange={(e)=>{ addInfo("overview",e.target.value)}}
                 defaultValue={info?.overview || ""}
                />
                <Typography align="left" sx={{mb:1}}>
                    Industry
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{ addInfo("industry",e.target.value) }}
                            defaultValue={info?.industry || ""}
                />
                 <Typography align="left" sx={{mb:1}}>
                     Company size (No of employees)
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{ addInfo("size",e.target.value) }}
                           defaultValue={info?.size || ""}
                           
                />
                <Typography align="left" sx={{mb:1}}>
                     Headquarters
                </Typography>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           fullWidth
                           sx={{mb:2}}
                           onChange={(e)=>{ addInfo("headquarters",e.target.value) }}
                           defaultValue={info?.headquarters || ""}
                           
                />
               
                <Typography align="left" sx={{mb:1}}>
                    Locations
                </Typography>
                <Stack direction="row" spacing={4} sx={{mb:3}}>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           name="skill"
                           onChange={(e)=>{setLocation(e.target.value)}}
                           fullWidth
                           sx={{mb:2}}
                />
                <Button size="small" variant="outlined" color="primary"
                 onClick={(e)=>{
                  setLocations(prevLocations=>[...prevLocations,location])
                  setLocation("")}}>Add</Button>
                </Stack>
               
                {
                
                      locations.map((value,index) =><><Stack key={index} direction="row" spacing={37}sx={{padding:1}}><List style={{ fontSize: '1.5em' ,color:"black"}}>
                            {value}
                        </List> 
                        <IconButton aria-label="delete" size="medium" onClick={()=>{handleDeleteLocation(index)}}>
                        <DeleteIcon fontSize='medium' />
                        
                      </IconButton>
                      
                     
                      </Stack>
                      </>
                      )
                }

<Typography align="left" sx={{mb:1}}>
                    Specialities
                </Typography>
                <Stack direction="row" spacing={4} sx={{mb:3}}>
                <TextField id="outlined-basic" 
                           variant="outlined"  
                           size="small"
                           name="skill"
                           onChange={(e)=>{setCurrent(e.target.value)}}
                           fullWidth
                           sx={{mb:2}}
                />
                <Button size="small" variant="outlined" color="primary"
                 onClick={(e)=>{
                  setSpecialites(prevSpecialities=>[...prevSpecialities,current])
                  setCurrent("")}}>Add</Button>
                </Stack>
               
                {
                
                      specialities.map((value,index) =><><Stack key={index} direction="row" spacing={37}sx={{padding:1}}><List style={{ fontSize: '1.5em' ,color:"black"}}>
                            {value}
                        </List> 
                        <IconButton aria-label="delete" size="medium" onClick={()=>{handleDeleteSpecialities(index)}}>
                        <DeleteIcon fontSize='medium' />
                        
                      </IconButton>
                      
                     
                      </Stack>
                      </>
                      )
                }
              
        
 
      
            <Button type="submit" onClick={(e)=>
              { addInfo("locations",locations);
                addInfo("specialities",specialities);
                navigate('/Orgpage')}} variant="contained" color="primary" size="large"sx={{ mb:4 ,height:50,width:200}}>
              Save changes
            </Button>
            
        
                
        </Box>
      </Container>
      </>
    );
    
}