import React from 'react';
import './NewsLetterSection.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const NewsLetterSection = () => {
    return (
        <Box component="div" className="section newsletter-section" sx={{
            minHeight:{
                xs:'250px',
                sm:'300px',
                md:'400px'
            }
        }}>
            <div class="triangle-decor">
                <svg x="0px" y="0px" width="100%" height="15px">
                    <defs>
                        <pattern id="bottom-divider" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse"><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M7.504-0.008l7.504,7.504L7.504,15L0,7.496L7.504-0.008z"></path></pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="15" fill="url(#bottom-divider)"></rect>
                </svg>
            </div>
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Typography variant="h4" component="h4" sx={{
                            color: 'var(--primary-color)',
                            fontSize: {
                                sm: '16px',
                                xs: '12px'
                            }
                        }}>LATEST FOODS DIRECTLY TO YOUR INBOX</Typography>
                        <Typography variant="h2" component="h2" sx={{
                            color: '#fff',
                            fontSize: {
                                sm: '35px',
                                xs: '20px'
                            },
                            fontFamily: "'Playball', cursive"
                        }}>SUBSCRIBE FOR UPDATED</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <div className="newsletter-box">
                            <input type="email" name="email" placeholder="Email Address" />
                            <button type="button">Submit</button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NewsLetterSection;