import { Box, Typography, Divider } from '@mui/material';
import { Button } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import BarChartIcon from '@mui/icons-material/BarChart';
import SchoolIcon from '@mui/icons-material/School';


function ApplicantCard({ applicant }) {
    function getExperience() {
        if (applicant.requiredExperience === 1) {
            return "Intern";
        } else if (applicant.requiredExperience === 2) {
            return "Early";
        } else if (applicant.requiredExperience === 3) {
            return "Mid";
        } else if (applicant.requiredExperience === 4) {
            return "Advanced";
        } else if (applicant.requiredExperience === 5) {
            return "Director+";
        }
        return "No experience";
    }

    function getDegree() {
        if (applicant.reqDegree === 1) {
            return "Pursuing Degree";
        } else if (applicant.reqDegree === 2) {
            return "Associate";
        } else if (applicant.reqDegree === 3) {
            return "Bachelors";
        } else if (applicant.reqDegree === 4) {
            return "Masters";
        } else if (applicant.reqDegree === 5) {
            return "Ph.D.";
        }
        return "No Degree";
    }

    return <Box sx={{
        outline: '1px solid gray',
        padding: '1em',
        bgcolor: 'white',
        width: '100%',
        borderRadius: '10%',
    }}>
        <Box display='flex' gap='1em' alignItems='center'>
            <AccountCircleIcon />
            <Typography sx={{ fontSize: '1.25em' }}>{applicant.firstName + " " + applicant.middleName + " " + applicant.lastName}</Typography>
        </Box>
        <Divider sx={{ marginTop: '0.5em', bgcolor: 'black' }} />
        <Box marginTop='1em'>
            <Box display='flex' gap='1em'>
                <BookIcon />
                <Typography>{applicant.skills.join(', ')}</Typography>
            </Box>
            <Box display='flex' gap='1em'>
                <BarChartIcon />
                <Typography>{getExperience()}</Typography>
            </Box>
            <Box display='flex' gap='1em'>
                <SchoolIcon />
                <Typography>{getDegree()}</Typography>
            </Box>
            <Box sx={{ marginTop: '1em', display: 'flex', gap: '1em' }}>
                <Button variant='contained' >View Resume</Button>
                <Button variant='contained' >Connect</Button>
            </Box>
        </Box >
    </Box >
}

export default ApplicantCard;