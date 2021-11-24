import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Box';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <Box component="div" className="hero-banner" sx={{
            background: 'linear-gradient(rgba(0, 0, 0, 0.40),rgba(0, 0, 0, 0.40)),  url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            padding:'100px 0',
            minHeight:{
                xs:'350px',
                sm:'450px',
                md:'550px',
                lg:'650px'
            },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Container fixed>
                <Box component="div" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color:'#fff',
                    textAlign:'center'
                }}>
                    <div>
                        <Typography 
                        variant="h1" 
                        component="h1"
                        sx={{
                            fontFamily: "'Playball', cursive",
                            fontSize:{
                                xs:'40px',
                                sm:'50px',
                                md:'70px'
                            }
                        }}
                        >
                            Bakery Exclusive Foods
                        </Typography>
                        <Typography 
                        variant="p" component="p"
                        sx={{
                            fontFamily: "'Playball', cursive",
                            fontSize:{
                                xs:'18px',
                                sm:'20px',
                                md:'25px'
                            },
                            marginBottom:'30px'
                        }}
                        >
                            It's time for hunger to can it!
                            </Typography>
                        <Link to="/foods" className="btn btn-primary btn-rounded">Taste Now</Link>
                    </div>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroBanner;