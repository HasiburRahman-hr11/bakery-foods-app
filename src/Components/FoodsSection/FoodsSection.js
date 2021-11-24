import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// Foods Data
import { foods } from '../../fakeData';
import Food from '../Food/Food';

const FoodsSection = () => {
    return (
        <Box component="section" className="foods-section" sx={{
            paddingTop: '50px'
        }}>
            <Container fixed>
                <h2 className="section-title">Our Foods</h2>
                <p className="section-subtitle">Lorem, ipsum dolor</p>


                <Box component="div" sx={{
                    marginTop: '50px'
                }}>
                    <Grid container spacing={4}>
                        {foods.map(food => (
                            <Grid item xs={12} sm={6} md={4} key={food._id}>
                                <Food food={food} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default FoodsSection;