import { Box, Typography, styled, Button } from '@mui/material';
import googleLogo from '../../assets/google_logo.jpg';
function ProfileCard({ connection }) {
    const Image = styled('img')({
        width: '25%',
        borderRadius: '50%',
        maxWidth: '80px'
    });

    return <Box height='100%' minHeight='200px' minWidth='150px' position='relative' outline='1px solid black'>
        <Box height='25%' bgcolor='blue' marginBottom='15%'></Box>
        <Image src={googleLogo} sx={{ position: 'absolute', left: '20%', top: '20%', outline: '1px solid white' }} />
        <Box padding='1em 1em 1em 20%'>
            <Typography fontWeight='bold'>{connection.firstName + " " + connection.middleName + " " + connection.lastName}</Typography>
            <Typography fontSize='0.8em' color='gray'>{connection.description}</Typography>
            <Button variant='contained' sx={{ bgcolor: 'blue', marginTop: '1em' }}>Connect</Button>
        </Box>
    </Box >
}

export default ProfileCard;