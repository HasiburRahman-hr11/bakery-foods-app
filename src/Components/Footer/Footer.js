import React from 'react';
import './Footer.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ToTop from '../ToTop/ToTop';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <Container fixed>
                    <Grid container spacing={4}>
                        <Grid item md={3} sm={6} xs={12}>
                            <div className="footer-widget">
                                <h3 className="widget-title">Bakery</h3>
                                <div className="widget-body">
                                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid maxime aut ut voluptate dolorum nisi ducimus ratione</p>

                                    <div className="footer-social">
                                        <h2>Get Social</h2>
                                        <ul className="social-list">
                                            <li>
                                                <Link to="#">
                                                    <FacebookIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <TwitterIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <InstagramIcon />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <YouTubeIcon />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <div className="footer-widget">
                                <h3 className="widget-title">Contact</h3>
                                <div className="widget-body">
                                    <Link to="#">A: Via Venti Settembre, Ireland</Link>
                                    <Link to="#">P: +31 555 777 83</Link>
                                    <Link to="#">App: Viber, WhatsApp</Link>
                                    <Link to="#">E: kamperen@qode.com</Link>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <div className="footer-widget">
                                <h3 className="widget-title">Quick Links</h3>
                                <div className="widget-body">
                                    <ul>
                                        <li>
                                            <Link to="#">About Us</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Contact Us</Link>
                                        </li>
                                        <li>
                                            <Link to="#">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/cart">My Cart</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={3} sm={6} xs={12}>
                            <div className="footer-widget">
                                <h3 className="widget-title">Spacial Offer</h3>
                                <div className="widget-body">
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis, cupiditate. Lorem ipsum dolor sit amet.</p>
                                    
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className="fooetr-bottom">
                <div className="footer-bottom-content">
                    <p>© 2021 Hasibur Rahman, All Rights Reserved</p>
                </div>
            </div>
            <ToTop/>
        </footer>
    );
};

export default Footer;