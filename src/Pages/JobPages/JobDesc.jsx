import { Box, Typography, Button, Divider } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PlaceIcon from '@mui/icons-material/Place';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Parser } from "html-to-react";
import CloseIcon from '@mui/icons-material/Close';

function JobDesc({ job, setDrawer2 }) {
    function getExperience() {
        if (job.requiredExperience === 1) {
            return "Intern";
        } else if (job.requiredExperience === 2) {
            return "Early";
        } else if (job.requiredExperience === 3) {
            return "Mid";
        } else if (job.requiredExperience === 4) {
            return "Advanced";
        } else if (job.requiredExperience === 5) {
            return "Director+";
        }
        return "No experience required";
    }

    function getDegree() {
        if (job.reqDegree === 1) {
            return "Pursuing Degree";
        } else if (job.reqDegree === 2) {
            return "Associate";
        } else if (job.reqDegree === 3) {
            return "Bachelors";
        } else if (job.reqDegree === 4) {
            return "Masters";
        } else if (job.reqDegree === 5) {
            return "Ph.D.";
        }
        return "No Degree required";
    }

    // Conditionally render sections based on API data
    return (
        <Box width={'100vw'} padding={'1em'} display='flex' flexDirection='column' gap={'0.5em'}>
            <Box display='flex' alignItems={'center'} paddingRight={'2em'}>
                <Typography fontSize={'2em'}>{job.title}</Typography>
                <Button sx={{ marginLeft: 'auto' }} onClick={() => setDrawer2(false)}>
                    <CloseIcon />
                </Button>
            </Box>
            <Box sx={{ display: 'flex', gap: '1em', width: '50%' }}>
                {job.companyName && (
                    <Box display={'flex'} gap={'0.25em'}>
                        <BusinessIcon />
                        <Typography>{job.companyName}</Typography>
                    </Box>
                )}
                {job.location && job.location.length > 0 && (
                    <Box display={'flex'} gap={'0.10em'}>
                        <PlaceIcon />
                        <Typography>{job.location}</Typography>
                    </Box>
                )}
                {job.requiredExperience && (
                    <Box display={'flex'} gap={'0.25em'}>
                        <BarChartIcon />
                        <Typography>{getExperience()}</Typography>
                    </Box>
                )}
            </Box>
            <Box>
                <Button variant='contained' onClick={() => setDrawer2(false)}>Apply</Button>
            </Box>
            <Divider />

            {job.jobDescription?.minimumQualifications && job.jobDescription.minimumQualifications.length > 0 && (
                <Box>
                    <Typography>Minimum qualifications</Typography>
                    <ul>
                        {job.jobDescription.minimumQualifications.map((string, index) => (
                            <li key={index} style={{ fontSize: '1em' }}>{string}</li>
                        ))}
                    </ul>
                </Box>
            )}
            <Divider />

            {job.jobDescription?.preferredQualifications && job.jobDescription.preferredQualifications.length > 0 && (
                <Box>
                    <Typography>Preferred qualifications</Typography>
                    <ul>
                        {job.jobDescription.preferredQualifications.map((string, index) => (
                            <li key={index} style={{ fontSize: '1em' }}>{string}</li>
                        ))}
                    </ul>
                </Box>
            )}
            <Divider />

            {job.jobDescription?.about && (
                <Box>
                    <Typography>About The job</Typography>
                    <Box padding='0.5em'>
                        {new Parser().parse(job.jobDescription.about)}
                    </Box>
                </Box>
            )}
            <Divider />

            {job.jobDescription?.responsibilities && job.jobDescription.responsibilities.length > 0 && (
                <Box>
                    <Typography>Responsibilities</Typography>
                    <ul>
                        {job.jobDescription.responsibilities.map((string, index) => (
                            <li key={index} style={{ fontSize: '1em' }}>{string}</li>
                        ))}
                    </ul>
                </Box>
            )}
        </Box>
    );
}

export default JobDesc;