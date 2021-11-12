import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;