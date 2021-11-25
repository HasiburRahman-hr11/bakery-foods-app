import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';

const OrderSuccess = () => {
    return (
        <>
            <Navigation />
            <Box component="div" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 'calc(100vh - 100px)'
            }}>
                <Container fixed>
                    <Box component="div" sx={{
                        backgroundColor: '#fff',
                        padding: '20px',
                        borderRadius: '5px',
                        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
                        maxWidth: '500px',
                        margin: '0 auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign:'center'
                    }}>
                        <div>
                            <Typography variant="h2" component="h2" sx={{
                                fontSize: '25px',
                                color: '#666',
                                marginBottom:'20px',
                                fontFamily: "'Playball', cursive"
                            }}>
                                Thank you. Order placed Successfully.
                            </Typography>
                            <Link to="/" className="btn btn-primary btn-rounded">Home</Link>
                        </div>
                    </Box>
                </Container>
            </Box>
            <Footer/>
        </>
    );
};

export default OrderSuccess;