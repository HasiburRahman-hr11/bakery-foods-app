import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const FoodsSection = () => {
    return (
        <Box component="section" className="foods-section" sx={{
            paddingTop:'50px'
        }}>
            <Container fixed>
                <h2 className="section-title">Our Foods</h2>
                <p className="section-subtitle">Lorem, ipsum dolor</p>
            </Container>
        </Box>
    );
};

export default FoodsSection;