import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Navigation from '../../Components/Navigation/Navigation';

import { foods } from '../../fakeData';
import Food from '../../Components/Food/Food';

const AllFoods = () => {
    return (
        <>
            <Navigation />
            <Box component="div" className="page foods-page" sx={{
                padding: '50px 0'
            }}>
                <Container fixed>
                    <Grid container spacing={4}>
                        {foods.map(food => (
                            <Grid item xs={12} sm={6} md={4} key={food._id}>
                                <Food food={food} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default AllFoods;