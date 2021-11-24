import './Navigation.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';



const Navigation = () => {

    return (
        <Box
            component="header"
            sx={{
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.60)',
                position:'fixed',
                width:'100%',
                left:'0',
                top:'0',
            }}
        >
            <Container fixed>
                <Grid
                    container
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Grid
                        item
                        xs={4}
                    >
                        <Box
                            component="div"
                            sx={{
                                fontFamily: "'Playball', cursive",

                            }}
                        >
                            <Link to="/" className="logo">
                            Bakery
                            </Link>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={8}
                    >
                        <Box
                            component="ul"
                            className="main-menu"
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}
                        >
                            <Box component="li" sx={{ marginLeft: '20px' }}>

                                <Link to="/foods">
                                    Foods
                                </Link>
                            </Box>
                            <Box component="li" sx={{ marginLeft: '20px', position: 'relative', paddingTop: '5px' }}>
                                <Link to="/checkout">
                                    <AddShoppingCartIcon sx={{
                                        color: '#fff'
                                    }} />
                                </Link>
                                <Box component="span" sx={{
                                    position: 'absolute',
                                    top: '0',
                                    right: '-10px',
                                    backgroundColor: 'var(--primary-color)',
                                    width: '17px',
                                    height: '17px',
                                    borderRadius: '50%',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px'
                                }}>5</Box>
                            </Box>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Navigation;