import { useState, useEffect } from 'react';
import { Box, Button, Drawer } from '@mui/material';
import ApplicantCard from '../../Components/JobComponents/ApplicantCard';
import FilterListIcon from '@mui/icons-material/FilterList';
import ApplicantFilter from '../../Components/JobComponents/ApplicantFilter';

function JobApplicants() { // Pass jobId as a prop to the component
    const [drawer, setDrawer] = useState(false);
    const [applicants, setApplicants] = useState([]);
    const jobId = 1
    // Fetch applicants when the component mounts or jobId changes
    useEffect(() => {
        if (!jobId) return;

        async function fetchApplicants() {
            try {
                const response = await fetch(`https://jaefsha.ssl.airno.de/jobapplicants/${jobId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Error fetching applicants: ${response.statusText}`);
                }

                const data = await response.json();
                setApplicants(data.data || []); // Updated to match the structure of your API response
            } catch (error) {
                console.error(error);
                setApplicants([]); // Handle errors gracefully by resetting applicants
            }
        }

        fetchApplicants();
    }, [jobId]);


    const accord = (
        <ApplicantFilter setDrawer={setDrawer} width="100vw" outline="none" />
    );

    document.body.style.backgroundColor = '#f8f4ec';

    return (
        <Box>
            <Drawer open={drawer}>
                {accord}
            </Drawer>
            <Box
                display="flex"
                justifyContent="center"
                marginTop="7em"
                width="100%"
                alignItems="center"
            >
                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    padding="1em"
                    width="60%"
                >
                    <Box
                        alignSelf="flex-start"
                        bgcolor="white"
                        minWidth="300px"
                        padding="0.75em"
                        borderRadius="15%"
                        outline="1px solid gray"
                        marginBottom="1em"
                        display={{ sm: 'flex', md: 'none' }}
                        width="100%"
                    >
                        <Button
                            textDecoration="none"
                            color="black"
                            onClick={() => setDrawer(true)}
                        >
                            <FilterListIcon />
                        </Button>
                    </Box>
                    <Box display="flex" gap="0.8em" width="100%">
                        <ApplicantFilter
                            setDrawer={setDrawer}
                            width="100%"
                            display={{ sm: 'none', md: 'block' }}
                            outline="1px solid black"
                        />
                        <Box width="100%">
                            {applicants.length > 0 ? (
                                applicants.map((applicant, index) => (
                                    <ApplicantCard
                                        applicant={applicant}
                                        key={index}
                                    />
                                ))
                            ) : (
                                <Box>No applicants found</Box>
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default JobApplicants;
