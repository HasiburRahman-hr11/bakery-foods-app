import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Navigation from '../../Components/Navigation/Navigation';

import { useParams } from 'react-router-dom';
import { foods } from '../../fakeData';
import Loading from '../../Components/Loading/Loading';
import { CartContext } from '../../context/CartContext';
import { getOldCart, setNewCartToLs } from '../../utils/cartHandler';
import { successNotify } from '../../utils/toastify';
import Footer from '../../Components/Footer/Footer';
import Fade from 'react-reveal/Fade';

const SingleFood = () => {
    const { setCart } = useContext(CartContext);
    const [food, setFood] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();

    const [quantity, setQuantity] = useState(1);

    const handleQtyIncrement = () => {
        setQuantity(quantity + 1)
    }
    const handleQtyDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleAddToCart = (food, quantity) => {
        setNewCartToLs(food, quantity);
        const newCart = getOldCart();
        setCart(newCart);
        setQuantity(1);
        successNotify('Food added to cart');
    }

    useEffect(() => {
        const fetchFood = () => {
            const isFood = foods.find(food => food._id === params.id);
            setFood(isFood);
            setLoading(false);
        }
        fetchFood();
    }, [params.id]);

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Navigation />
            <Box component="div" sx={{
                padding: '50px 0'
            }}>
                <Container fixed>
                    <Grid container spacing={4} >
                        <Grid item md={6} xs={12}>
                            <Fade bottom>
                                <Box component="div">
                                    <img src={food.thumbnail} alt={food.title} />
                                </Box>
                            </Fade>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Fade bottom>
                                <Box component="div">
                                    <Typography variant="h2" component="h2" sx={{
                                        fontFamily: "'Playball', cursive",
                                        fontSize: {
                                            sm: '35px',
                                            xs: '30px'
                                        },
                                        color: 'var(--primary-color)',
                                        marginBottom: '10px'
                                    }}>
                                        {food.title}
                                    </Typography>
                                    <Typography variant="h3" component="h3" sx={{
                                        fontSize: '25px',
                                        marginBottom: '25px'
                                    }}>
                                        Price: ${food.price} Only
                                    </Typography>
                                    <Typography variant="p" component="p" sx={{
                                        marginBottom: '30px',
                                        color: '#444',
                                        maxWidth: '400px',
                                        fontFamily: "'Playball', cursive",
                                        fontSize: '18px'
                                    }}>
                                        {food.description}
                                    </Typography>
                                </Box>

                                <Box component="div" sx={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Box component="div" className="quantity-wrapper" sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        border: '1px solid #ddd',
                                        borderRadius: '30px'
                                    }}>
                                        <Box component="button"
                                            onClick={handleQtyDecrement}
                                            sx={{
                                                width: '40px',
                                                height: '40px',
                                                backgroundColor: '#fff',
                                                borderRadius: '30px',
                                                fontSize: '18px',
                                                '&:hover': {
                                                    color: "var(--primary-color)",
                                                }
                                            }}>-</Box>

                                        <Box component="input"
                                            type="number"
                                            min="1"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)}
                                            sx={{
                                                width: '30px',
                                                height: '40px',
                                                textAlign: 'center',
                                                border: '0'
                                            }} />

                                        <Box component="button"
                                            onClick={handleQtyIncrement}
                                            sx={{
                                                width: '40px',
                                                height: '40px',
                                                backgroundColor: '#fff',
                                                borderRadius: '30px',
                                                fontSize: '18px',
                                                '&:hover': {
                                                    color: "var(--primary-color)",
                                                }
                                            }}>+</Box>
                                    </Box>

                                    <Box component="div" className="add_to_cart">
                                        <Box
                                            component="button"
                                            className="btn btn-primary btn-rounded"
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '8px 20px',
                                                marginLeft: '20px'
                                            }}
                                            onClick={() => handleAddToCart(food, quantity)}
                                        >
                                            <AddShoppingCartIcon />
                                            <Box component="span" sx={{ marginLeft: '10px' }} >Add</Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Fade>

                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Footer />
        </>
    );
};

export default SingleFood;