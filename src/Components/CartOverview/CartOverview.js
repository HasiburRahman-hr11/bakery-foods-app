import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import useCartFoods from '../../hooks/useCartFoods';
import { successNotify } from '../../utils/toastify';
import calculateCartAmount from '../../utils/cartCalculation';

const CartOverview = (props) => {

    const {
        handleRemoveCart,
        handleQtyIncrement,
        handleQtyDecrement,
        qtyChangeHandler,
        total,
        setTotal
    } = props;

    const { cartFoods } = useCartFoods();

    const cartItems = cartFoods.reduce((p, c) => p + c.quantity, 0);

    const {
        subtotal,
        shipping,
        tax,
        totalPrice
    } = calculateCartAmount(cartFoods);


    const [coupon, setCoupon] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);


    const handleApplyCoupon = () => {
        if (coupon !== '') {
            if (coupon === 'less10') {
                setTotal(total - 10);
                successNotify('Coupon applied successfully');
                setCouponApplied(true);
                setCoupon('')
            }
            if (coupon === 'less15') {
                setTotal(total - 15);
                successNotify('Coupon applied successfully');
                setCouponApplied(true);
                setCoupon('')
            }
        }
    }


    useEffect(() => {
        setTotal(totalPrice)
    }, [totalPrice]);

    return (
        <Box component="div" className="order-review" sx={{
            backgroundColor: '#fff',
            padding: {
                xs: '20px 15px',
                md: '20px'
            },
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
        }}>
            <Typography variant="h3" component="h3" sx={{
                fontWeight: '500',
                fontSize: '20px',
                paddingBottom: '10px',
                marginBottom: '20px',
                borderBottom: '2px solid #ddd',
                color: '#444',
                fontFamily: "'Playball', cursive"
            }}>
                Cart Overview
            </Typography>

            <Box component="div" sx={{ marginTop: '20px' }} className="cart-items-wrapper">
                {cartFoods.map((food, index) => (
                    <Box
                        key={index}
                        component="div"
                        className="cart-item"
                        sx={{
                            backgroundColor: '#F5F5F5',
                            padding: '7px 10px',
                            borderRadius: '5px',
                            marginBottom: '10px',
                            position: 'relative'
                        }}
                    >
                        <Box component="span"
                            className="remove-item"
                            onClick={() => handleRemoveCart(food)}
                            sx={{
                                width: '35px',
                                height: '35px',
                                position: 'absolute',
                                top: '5px',
                                right: '0',
                                left: 'auto',
                                color: 'var(--primary-color)',
                                cursor: 'pointer',
                                zIndex: '99'
                            }}
                        >
                            <HighlightOffIcon />
                        </Box>
                        <Box component="div" sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                        }}>
                            <Box component="div" sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>


                                <Box
                                    component="img"
                                    className="cart-item-thumbnail"
                                    src={food.thumbnail}
                                    alt={food.title}
                                    sx={{
                                        maxWidth: '80px',
                                        borderRadius: '5px'
                                    }} />


                                <Box component="div" sx={{
                                    marginLeft: { md: '20px', xs: '10px' },
                                    paddingTop: '10px'
                                }}>
                                    <Box component="h4" sx={{
                                        fontWeight: '500'
                                    }}>{food.title}</Box>
                                    <Box component="h3" sx={{
                                        color: 'var(--primary-color)'
                                    }}>${food.price}</Box>
                                </Box>
                            </Box>

                            <Box component="div" className="checkout-quantity" sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                border: '1px solid #ddd',
                                borderRadius: '5px',
                                backgroundColor: '#fff',
                                marginTop: '10px'
                            }}>
                                <Box component="button"
                                    type="button"
                                    onClick={() => handleQtyDecrement(food.quantity, index)}
                                    sx={{
                                        width: '30px',
                                        height: '30px',
                                        backgroundColor: 'var(--primary-color)',
                                        borderRadius: '5px 0 0 5px',
                                        fontSize: '18px',
                                        color: "#fff"
                                    }}>-</Box>

                                <Box component="input"
                                    type="number"
                                    min="1"
                                    value={food.quantity}
                                    onChange={(event) => qtyChangeHandler(event, index)}
                                    sx={{
                                        width: '40px',
                                        height: '30px',
                                        textAlign: 'center',
                                        border: '0'
                                    }} />

                                <Box component="button"
                                    type="button"
                                    onClick={() => handleQtyIncrement(food.quantity, index)}
                                    sx={{
                                        width: '30px',
                                        height: '30px',
                                        backgroundColor: 'var(--primary-color)',
                                        borderRadius: '0 5px 5px 0',
                                        fontSize: '18px',
                                        color: "#fff"
                                    }}>+</Box>
                            </Box>
                        </Box>

                    </Box>
                ))}

            </Box>


            <Box component="div" className="checkout-summery" sx={{ marginTop: '25px' }}>
                <Box component="p" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                }}>
                    <Box component="span">Subtotal ({cartItems} Item{cartItems > 1 ? 's' : ''})</Box>
                    <Box component="span">${subtotal.toFixed(2)}</Box>
                </Box>

                <Box component="p" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                }}>
                    <Box component="span">Tax</Box>
                    <Box component="span">${tax.toFixed(2)}</Box>
                </Box>

                <Box component="p" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px'
                }}>
                    <Box component="span">Delivery Charge</Box>
                    <Box component="span">${shipping.toFixed(2)}</Box>
                </Box>

                <Box component="p" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '10px',
                    fontSize: '19px',
                    fontWeight: '600'
                }}>
                    <Box component="span">Total</Box>
                    <Box component="span">${total.toFixed(2)}</Box>
                </Box>


                <Box component="div" sx={{
                    position: 'relative',
                    marginTop: '30px'
                }}>
                    <Box
                        component="input"
                        type="text"
                        placeholder="Have a coupon?"
                        sx={{
                            border: '1px solid #ddd',
                            backgroundColor: '#f1f1f1',
                            height: '45px',
                            borderRadius: '5px',
                            padding: '10px'
                        }}
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                    />
                    <Box
                        component="button"
                        type="button"
                        onClick={handleApplyCoupon}
                        disabled={couponApplied}
                        sx={{
                            height: '45px',
                            borderRadius: '0 5px 5px 0',
                            color: '#fff',
                            backgroundColor: 'var(--primary-color)',
                            position: 'absolute',
                            top: '0',
                            right: '0',
                            padding: '0 15px',
                            "&:disabled": {
                                opacity: '0.6',
                                cursor: 'not-allowed'
                            }
                        }}
                    >{couponApplied ? 'Applied' : 'Apply'}</Box>
                </Box>

            </Box>
        </Box>

    );
};

export default CartOverview;