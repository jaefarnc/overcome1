import { Box, Typography, styled, Button, Divider } from '@mui/material';
import googleLogo from '../../assets/google_logo.jpg';

function ConnectionRequestCard({ req }) {
    const Image = styled('img')({
        width: '10%'
    });


    return <Box outline='1px solid black'>
        <Box display='flex' flexDirection='column' alignItems='center' gap='1em' bgcolor='white'>
            <Box display='flex' alignItems='center' padding='1em'>
                <Image src={googleLogo} />=
                <Typography sx={{ marginLeft: '0.5em' }}>{req.firstName + " " + req.middleName + " " + req.lastName} wants to connect !</Typography>
                <Box display='flex' gap='1em' marginLeft='auto'>
                    <Button variant='contained'>Accept</Button>
                    <Button variant='contained'>Ignore</Button>
                </Box>
            </Box>
        </Box>
        <Divider />
    </Box>

}

export default ConnectionRequestCard;