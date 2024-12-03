import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import ConnectionRequestsCard from '../../Components/ConnectionComponents/ConnectionRequestCard';

function ConnectionRequests() {
    const [req, setReq] = useState([{
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        requesterId: '1',
        status: false,
        requesterImg: 'imgurl'
    }, {
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        requesterId: '1',
        status: false,
        requesterImg: 'imgurl'
    }]);

    document.body.style.backgroundColor = '#f8f4ec';

    return <Box display='flex' justifyContent='center' padding='1em'>
        <Box marginTop='5em' display='flex' flexDirection='column' gap='0.8em'>
            {
                req.map(r => <ConnectionRequestsCard req={r} />)
            }
        </Box>
    </Box>
}

export default ConnectionRequests;