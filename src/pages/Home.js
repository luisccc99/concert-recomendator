import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from 'react-router-dom';

const Home = () => {
    const loginSpotify = () => {
        // redirect to spotify login page
    };

    return (
        <div>
            <Stack
                direction="column"
                spacing={5}
                alignItems="center">
                <h1>Concert Recomendator App</h1>
                <Box>
                    <Button
                        size="large"
                        onClick={() => console.log('click')}
                        variant="contained">Start</Button>
                </Box>
            </Stack>
        </div>);
};

export default Home;