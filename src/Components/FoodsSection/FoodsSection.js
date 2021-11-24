import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { foods } from '../../fakeData';
import Food from '../Food/Food';
import { Link } from 'react-router-dom';

const FoodsSection = () => {
    return (
        <Box component="section" className="foods-section" sx={{
            padding: '50px 0'
        }}>
            <Container fixed>
                <h2 className="section-title">Our Foods</h2>
                <p className="section-subtitle">Eat away at hunger</p>


                <Box component="div" sx={{
                    marginTop: '50px'
                }}>
                    <Grid container spacing={4}>
                        {foods.slice(0, 6).map(food => (
                            <Grid item xs={12} sm={6} md={4} key={food._id}>
                                <Food food={food} />
                            </Grid>
                        ))}
                    </Grid>

                    <Box component="div" sx={{
                        marginTop: '40px',
                        textAlign:'center'
                    }}>
                        <Link to="/foods" className="btn btn-primary">All Foods</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default FoodsSection;