import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const Food = ({ food }) => {
    return (
        <Fade bottom>
            <Box component="div" className="food-item" sx={{
                padding: '20px 15px',
                background: '#fff',
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                borderRadius: '5px',
                transition: 'all 0.3s ease',
                border: {
                    md: '1px solid #fff',
                    xs: '0'
                },
                '&:hover': {
                    border: {
                        md: '1px dotted #999',
                        xs: '0'
                    }
                }
            }}>
                <Box component="div" sx={{
                    position: 'relative'
                }}>
                    <img src={food.thumbnail} alt={food.title} style={{
                        borderRadius: '5px'
                    }} />
                    <span className="food-price">
                        <strong>${food.price}</strong> Only
                    </span>
                </Box>


                <Box component="div" sx={{
                    textAlign: 'center',
                    marginTop: '10px'
                }}>
                    <Typography variant="h2" component="h2" sx={{
                        fontSize: '20px',
                        textAlign: 'center',
                        fontWeight: '600'
                    }}>
                        <Link to={`/foods/${food._id}`} style={{
                            color: 'var(--primary-color)'
                        }}>
                            {food.title}
                        </Link>
                    </Typography>

                    <Typography variant="p" component="p" sx={{
                        marginBottom: '20px',
                        color: '#555',
                        fontFamily: "'Playball', cursive"
                    }}>
                        {food.description.substr(0, 30)}...
                    </Typography>

                    <Link to={`/foods/${food._id}`} className="btn btn-primary btn-rounded">Order Now</Link>
                </Box>
            </Box>
        </Fade>
    );
};

export default Food;