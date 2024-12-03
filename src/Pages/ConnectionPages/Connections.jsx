import { useState } from 'react';
import { Box, Typography, Button, Grid2 } from '@mui/material';
import ProfileCard from '../../Components/ConnectionComponents/ProfileCard';

function Connections() {
    const [connections, setConnections] = useState([{
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        description: 'SWE @ Google',
        userImg: 'imgurl',
    }, {
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        description: 'SWE @ Google',
        userImg: 'imgurl',
    }, {
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        description: 'SWE @ Google',
        userImg: 'imgurl',
    }, {
        firstName: 'John',
        middleName: '',
        lastName: 'Doe',
        description: 'SWE @ Google',
        userImg: 'imgurl',
    }]);
    return <Grid2 container sx={{ padding: '1em' }} spacing={2}>
        {
            connections.map(connection => <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
                <ProfileCard connection={connection} />
            </Grid2>)
        }
    </Grid2>
}

export default Connections;