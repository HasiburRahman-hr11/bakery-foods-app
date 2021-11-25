import React from 'react';
import './NewsLetterSection.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const NewsLetterSection = () => {
    return (
        <div className="section newsletter-section">
            <Container fixed>
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Typography variant="h4" component="h4" sx={{
                            color: 'var(--primary-color)',
                            fontSize: {
                                sm:'16px',
                                xs:'12px'
                            }
                        }}>LATEST FOODS DIRECTLY TO YOUR INBOX</Typography>
                        <Typography variant="h2" component="h2" sx={{
                            color: '#fff',
                            fontSize: {
                                sm:'35px',
                                xs:'20px'
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
        </div>
    );
};

export default NewsLetterSection;