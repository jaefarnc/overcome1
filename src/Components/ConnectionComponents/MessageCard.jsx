import { Box, Typography, styled, Divider } from '@mui/material';
import googleLogo from '../../assets/google_logo.jpg';

function MessageCard({ connection, message }) {
    const Image = styled('img')({
        width: '15%',
        borderRadius: '50%'
    });

    return <Box display='flex' flexDirection='column' gap='0.75em'>
        <Box display='flex' gap='1em' alignItems='center'>
            <Image src={googleLogo} />
            <Typography fontWeight='bold'>{
                // message.senderId === connection.applicantId ? (
                //     connection.firstName + " " + connection.middleName + " " + connection.lastName) : 
                //     (user.firstName + " " +  user.middleName + " " + user.lastName)
                connection.firstName + " " + connection.middleName + " " + connection.lastName
            }</Typography>
            <Typography sx={{
                marginLeft: 'auto',
                fontSize: '0.8em'
            }}>{message.createdAt}</Typography>
        </Box>
        <Divider sx={{ bgcolor: 'black' }} />
        <Typography>
            {message.messageBody}
        </Typography>
        {/* <Divider sx={{ bgcolor: 'black ' }} /> */}
    </Box>
}

export default MessageCard;