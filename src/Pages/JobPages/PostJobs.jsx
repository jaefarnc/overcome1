import React, { useState, useRef, useEffect } from 'react';
import { Box, TextField, Typography, Button, FormControlLabel, Checkbox, CircularProgress } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../UserContext';

function PostJobs() {
    //const { org, info, login, logout } = useUser()
    const org = "TechCorp"
    const navigate = useNavigate();

    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const title = useRef('');
    const location = useRef('');
    const exp = useRef(0);
    const deg = useRef(0);
    const latestSkill = useRef('');
    const [orgId, setOrgId] = useState(1);
    const [error, setError] = useState(null);
    // Fetch orgId when component mounts
    useEffect(() => {
        const fetchOrgId = async () => {
            if (!org) {
                setError('Organization not found');
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                // const response = await axios.get('https://jaefsha.ssl.airno.de/orgid', {
                //     params: { "orgName": org }
                // });
                //setOrgId(response.data.orgId);
                setError(null);
            } catch (error) {

                console.error('Error fetching orgId:', error);
                setError('Failed to fetch organization ID');
            } finally {
                setIsLoading(false);
            }
        };

        fetchOrgId();
    }, [org]);

    const handleSubmit = async () => {
        // Validate required fields
        // if (!title.current || !location.current || exp.current === 0 || deg.current === 0 || skills.length === 0 || !orgId) {
        //     alert('Please fill in all required fields');
        //     return;
        // }

        try {
            const jobData = {
                title: title.current,
                location: location.current,
                requiredExperience: exp.current,
                reqDegree: deg.current,
                orgId: orgId,
                required_skills: skills
            };

            const response = await axios.post('https://jaefsha.ssl.airno.de/jobs', jobData);

            // Redirect to jobs page on successful submission
            navigate('/jobs');
        } catch (error) {
            console.error('Error posting job:', error);
            alert('Failed to post job. Please try again.');
        }
    };

    if (isLoading) {
        return (
            <Box display="flex" justifyContent="center" alignItems="center" height="100%">
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box padding='1em'>
                <Typography color="error">{error}</Typography>
            </Box>
        );
    }

    return (
        <Box padding='1em' display='flex' flexDirection='column' gap='1em'>
            <Box>
                <Typography>Job Title</Typography>
                <TextField
                    variant='filled'
                    label='Job Title e.g. Executive Software Engineer'
                    fullWidth
                    onChange={(e) => title.current = e.target.value}
                />
            </Box>

            <Box>
                <Typography>Location</Typography>
                <TextField
                    variant='filled'
                    label='Locations e.g. Bangalore'
                    fullWidth
                    onChange={(e) => location.current = e.target.value}
                />
            </Box>

            <Box>
                <Typography>Required experience</Typography>
                <Box>
                    <FormControlLabel
                        label="Intern"
                        control={<Checkbox />}
                        onChange={() => { exp.current = Math.max(exp.current, 1); }}
                    />
                    <FormControlLabel
                        label="Early"
                        control={<Checkbox />}
                        onChange={() => { exp.current = Math.max(exp.current, 2); }}
                    />
                </Box>
                <Box>
                    <FormControlLabel
                        label="Mid"
                        control={<Checkbox />}
                        onChange={() => { exp.current = Math.max(exp.current, 3); }}
                    />
                    <FormControlLabel
                        label="Advanced"
                        control={<Checkbox />}
                        onChange={() => { exp.current = Math.max(exp.current, 4); }}
                    />
                </Box>
                <Box>
                    <FormControlLabel
                        label="Director+"
                        control={<Checkbox />}
                        onChange={() => { exp.current = Math.max(exp.current, 5); }}
                    />
                </Box>
            </Box>

            <Box>
                <Typography>Required degree</Typography>
                <Box>
                    <FormControlLabel
                        label="Pursuing Degree"
                        control={<Checkbox />}
                        onChange={() => { deg.current = Math.max(deg.current, 1); }}
                    />
                    <FormControlLabel
                        label="Associate"
                        control={<Checkbox />}
                        onChange={() => { deg.current = Math.max(deg.current, 2); }}
                    />
                </Box>
                <Box>
                    <FormControlLabel
                        label="Bachelors"
                        control={<Checkbox />}
                        onChange={() => { deg.current = Math.max(deg.current, 3); }}
                    />
                    <FormControlLabel
                        label="Masters"
                        control={<Checkbox />}
                        onChange={() => { deg.current = Math.max(deg.current, 4); }}
                    />
                </Box>
                <Box>
                    <FormControlLabel
                        label="Ph.D."
                        control={<Checkbox />}
                        onChange={() => { deg.current = Math.max(deg.current, 5); }}
                    />
                </Box>
            </Box>

            <Box>
                <Typography>Required Skills</Typography>
                <Box display='flex' flexDirection='column' gap='1em'>
                    {skills.map((skill, index) => (
                        <Box key={index} display='flex'>
                            <TextField
                                variant='filled'
                                label='Skill'
                                value={skill}
                                fullWidth
                                onChange={(e) => {
                                    const newSkills = [...skills];
                                    newSkills[index] = e.target.value;
                                    setSkills(newSkills);
                                }}
                            />
                            <Button onClick={() => {
                                const newSkills = skills.filter((_, i) => i !== index);
                                setSkills(newSkills);
                            }}>
                                <RemoveIcon />
                            </Button>
                        </Box>
                    ))}
                    <Box display='flex'>
                        <TextField
                            id='latestSkill'
                            variant='filled'
                            label='Add Skill'
                            fullWidth
                            onChange={(e) => {
                                latestSkill.current = e.target.value;
                            }}
                        />
                        <Button onClick={() => {
                            const skillValue = latestSkill.current.trim();
                            if (skillValue) {
                                setSkills([...skills, skillValue]);
                                latestSkill.current = '';
                                document.getElementById('latestSkill').value = '';
                            }
                        }}>
                            <AddIcon />
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Button
                    variant='contained'
                    onClick={handleSubmit}
                >
                    Post Job
                </Button>
            </Box>
        </Box>
    );
}

export default PostJobs;