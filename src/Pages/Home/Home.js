import React from 'react';
import FoodsSection from '../../Components/FoodsSection/FoodsSection';
import HeroBanner from '../../Components/HeroBanner/HeroBanner';
import Navigation from '../../Components/Navigation/Navigation';
import Footer from '../../Components/Footer/Footer';
import NewsLetterSection from '../../Components/NewsletterSection/NewsLetterSection';

const Home = () => {
    return (
        <>
            <Navigation />
            <HeroBanner />
            <FoodsSection />
            <NewsLetterSection/>
            <Footer/>
        </>
    );
};

export default Home;