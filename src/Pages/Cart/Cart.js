import React, { useContext, useState } from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Navigation from '../../Components/Navigation/Navigation';
import { CartContext } from '../../context/CartContext';
import useCartFoods from '../../hooks/useCartFoods';
import { successNotify } from '../../utils/toastify';
import { getOldCart } from '../../utils/cartHandler';
import CheckoutForm from '../../Components/CheckoutForm/CheckoutForm';
import CartOverview from '../../Components/CartOverview/CartOverview';

const Cart = () => {

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        city: '',
        flat: '',
        deliveryNote: ''
    });

    const { cart, setCart } = useContext(CartContext);
    const { cartFoods } = useCartFoods();
    const cartItems = cartFoods.reduce((p, c) => p + c.quantity, 0);

    const navigate = useNavigate();




    const handleQtyIncrement = (prevQty, index) => {
        const value = prevQty;
        const cloneProducts = [...cart];
        cloneProducts[index].quantity = value + 1;
        setCart(cloneProducts);
        localStorage.setItem('bakery-cart', JSON.stringify(cart));
        successNotify('Cart Updated Successfully.')
    }
    const handleQtyDecrement = (prevQty, index) => {
        const value = prevQty;
        const cloneProducts = [...cart];
        const valueInt = parseInt(value);
        if (valueInt > 1) {
            cloneProducts[index].quantity = value - 1;
        }
        setCart(cloneProducts);
        localStorage.setItem('bakery-cart', JSON.stringify(cart));
        successNotify('Cart Updated Successfully.')
    }
    const qtyChangeHandler = (event, index) => {
        const value = event.target.value;
        const valueInt = parseInt(value);
        const cloneProducts = [...cart];

        if (value === "") {
            cloneProducts[index].quantity = 1;
        } else {
            cloneProducts[index].quantity = valueInt;
        }
        setCart(cloneProducts);
    }

    const handleRemoveCart = (food) => {
        const updatedCart = cart.filter(item => item._id !== food._id);
        localStorage.setItem('bakery-cart', JSON.stringify(updatedCart));
        const newCarts = getOldCart();
        setCart(newCarts);
        successNotify('Food Removed From Cart.')
    }


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.address && formData.city) {
            navigate('/');

            localStorage.removeItem('bakery-cart');
            const newCarts = getOldCart();
            setCart(newCarts);
            successNotify('Order received successfully')
        }
    }

    return (
        <>
            <Navigation />
            <Box component="div" className="page cart-page" sx={{
                padding: '50px 0'
            }}>
                <Container fixed>
                    {cartItems > 0 ? (
                        <form action="">
                            <Grid container spacing={4}>
                                <Grid item md={6} xs={12}>

                                    <CartOverview
                                        handleRemoveCart={handleRemoveCart}
                                        handleQtyIncrement={handleQtyIncrement}
                                        handleQtyDecrement={handleQtyDecrement}
                                        qtyChangeHandler={qtyChangeHandler}
                                    />

                                </Grid>
                                <Grid item md={6} xs={12} sx={{ paddingRight: { lg: '100px', md: '50px' } }}>

                                    <CheckoutForm formData={formData} handleChange={handleChange} />

                                </Grid>
                            </Grid>
                        </form>
                    ) : (
                        <Box component="div" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            minHeight: 'calc(100vh - 200px)'
                        }}>
                            <Typography variant="h2" component="h2" sx={{
                                fontSize: '25px',
                                color: '#666'
                            }}>
                                Your cart is empty!
                            </Typography>
                        </Box>
                    )}
                </Container>
            </Box>
        </>
    );
};

export default Cart;