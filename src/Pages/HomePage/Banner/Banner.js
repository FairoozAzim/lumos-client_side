import React from 'react';
import './Banner.css'
import banner from '../../../images/banner.jpeg'

const Banner = () => {
    return (
        <div className="banner">
            <img src={banner} alt=""></img>
        </div>
    );
};

export default Banner;