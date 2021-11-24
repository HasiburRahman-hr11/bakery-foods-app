import React from 'react';
import FoodsSection from '../../Components/FoodsSection/FoodsSection';
import HeroBanner from '../../Components/HeroBanner/HeroBanner';
import Navigation from '../../Components/Navigation/Navigation';

const Home = () => {
    return (
        <>
            <Navigation />
            <HeroBanner />
            <FoodsSection />
        </>
    );
};

export default Home;