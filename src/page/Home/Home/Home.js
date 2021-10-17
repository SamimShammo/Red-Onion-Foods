import React from 'react';
import Banner from '../Banner/Banner';
import ChooseUs from '../chooseme/ChooseUs';

import Food from '../Food/Food/Food';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
             <Food></Food>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;