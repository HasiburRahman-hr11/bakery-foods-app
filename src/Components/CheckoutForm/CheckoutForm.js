import React from 'react';
import Box from '@mui/material/Box';

const CheckoutForm = ({ formData, handleChange  }) => {
    return (
        <>
            <Box component="h2" sx={{
                fontWeight: '500',
                fontSize: '20px',
                paddingBottom: '10px',
                marginBottom: '20px',
                borderBottom: '2px solid #ddd',
                color: '#444'
            }}>
                Delivery Details
            </Box>

            <Box component="div" className="input-group">
                <Box
                    component="input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required />
            </Box>
            <Box component="div" className="input-group">
                <Box
                    component="input"
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required />
            </Box>
            <Box component="div" className="input-group">
                <Box
                    component="input"
                    type="text"
                    placeholder="Flat, suit or floor"
                    name="flat"
                    value={formData.flat}
                    onChange={handleChange}
                />
            </Box>
            <Box component="div" className="input-group">
                <Box
                    component="input"
                    type="text"
                    placeholder="City"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                />
            </Box>
            <Box component="div" className="input-group">
                <Box
                    component="textarea"
                    placeholder="Add delivery note" name="deliveryNote"
                    value={formData.deliveryNote}
                    onChange={handleChange}
                />
            </Box>

            <Box component="div" sx={{
                marginTop: '25px'
            }}>
                <Box
                    component="button"
                    type="submit"
                    className="btn btn-primary"
                    style={{ display: 'block', width: '100%' }
                    }>
                    Place Order
                </Box>
            </Box>
        </>
    );
};

export default CheckoutForm;