import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Food = ({ food }) => {
    return (
        <Box component="div" className="food-item" sx={{
            padding: '20px 15px',
            background: '#fff',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
            borderRadius: '5px'
        }}>
            <img src={food.thumbnail} alt={food.title} style={{
                borderRadius: '5px'
            }} />
            <Typography variant="h2" component="h2" sx={{
                fontSize: '22px',
                textAlign: 'center',
                marginTop: '10px',
                fontWeight: '600'
            }}>
                <Link to={`/foods/${food._id}`} style={{
                    color: 'var(--primary-color)'
                }}>
                    {food.title}
                </Link>
            </Typography>

            <Box component="div" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '10px'
            }}>
                <span className="food-price">
                    Price: <strong>${food.price}</strong>
                </span>
                <Link to={`/foods/${food._id}`} className="btn btn-primary">Order Now</Link>
            </Box>
        </Box>
    );
};

export default Food;