import { Box, Button, Drawer, Divider } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import JobCard from '../../Components/JobComponents/JobCard.jsx';
import { useState, useEffect, useRef } from 'react';
import JobDesc from './JobDesc';
import JobFilter from '../../Components/JobComponents/JobFilter.jsx';

function Jobs() {
    const [drawer, setDrawer] = useState(false);
    const jobDesc = useRef(null);
    const [drawer2, setDrawer2] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState({
        location: '',
        experience: '',
        degree: '',
        organization: ''
    });

    // Fetch jobs data from the API
    useEffect(() => {
        async function fetchJobs() {
            try {
                const response = await fetch('https://jaefsha.ssl.airno.de/jobs');
                if (!response.ok) {
                    throw new Error('Failed to fetch jobs');
                }
                const data = await response.json();
                const jobsWithDeadline = data.jobs.map(job => ({
                    ...job,
                    deadline: new Date(new Date(job.posted_at).setMonth(new Date(job.posted_at).getMonth() + 6)),
                }));
                setJobs(jobsWithDeadline);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        }
        fetchJobs();
    }, []);

    // Filter the jobs based on the selected filters
    const filteredJobs = jobs.filter(job => {
        const matchesLocation = filters.location
            ? job.location.toLowerCase().includes(filters.location.toLowerCase())
            : true;
        const matchesExperience = filters.experience
            ? job.requiredExperience >= Number(filters.experience)
            : true;
        const matchesDegree = filters.degree
            ? job.reqDegree >= Number(filters.degree)
            : true;
        const matchesOrganization = filters.organization
            ? job.orgName.toLowerCase().includes(filters.organization.toLowerCase())
            : true;

        return matchesLocation && matchesExperience && matchesDegree && matchesOrganization;
    });

    return (
        <Box bgcolor='#f8f4ec'>
            <Drawer open={drawer}>
                <JobFilter
                    setDrawer={setDrawer}
                    width='100vw'
                    filters={filters}
                    setFilters={setFilters}
                />
            </Drawer>
            <Drawer open={drawer2}>
                <JobDesc job={jobDesc.current} setDrawer2={setDrawer2} />
            </Drawer>
            <Box
                sx={{
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: '7em',
                    width: '75%',
                }}
            >
                <Box
                    bgcolor={'white'}
                    padding={'1em'}
                    display={{ xs: 'block', sm: 'none' }}
                    marginBottom='1em'
                    outline='1px solid black'
                    borderRadius='10%'
                >
                    <Button sx={{ color: 'black' }} onClick={() => setDrawer(true)}>
                        <FilterListIcon />
                    </Button>
                </Box>
                <Box display='flex' width='100%' gap='1em'>
                    <JobFilter
                        setDrawer={setDrawer}
                        width='100%'
                        display={{ xs: 'none', sm: 'block' }}
                        filters={filters}
                        setFilters={setFilters}
                    />
                    <Box width='100%' minHeight='400px'>
                        {filteredJobs.map((job, index) => (
                            <JobCard
                                info={job}
                                key={index}
                                jobDesc={jobDesc}
                                setDrawer2={setDrawer2}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Jobs;
