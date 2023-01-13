import React from 'react';
import About from '../About/About';
import Adverties from '../Adverties/Adverties';
import Slider from '../Carousel/Slider';
import Categories from '../Categories/Categories';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Adverties></Adverties>
            <Categories></Categories>

            <About></About>
        </div>
    );
};

export default Home;