import React from 'react';
import './Banner.css'
import banner from '../../../images/banner-new.jpg'
import lamp1 from '../../../images/lamp1.jpg'
import lamp2 from '../../../images/lamp2.jpg'
import inspo4 from '../../../images/inspo4.jpg'
import inspo5 from '../../../images/inspo5.jpg'

const Banner = () => {
    return (
        <div className="banner container mt-5 mb-5 mx-auto">
            <h1 className="text-center fw-bold">LUMOS</h1>
            <h4 className='text-center mb-5'>Illuminate your house with class. Add these gorgeous lamps to adorn your home. </h4>
            <div className="row">
                <div className="col image-container">
                 <img className='img' src={lamp1} alt='a beautiful lamp'></img>
                </div>
                <div className="col d-none d-md-none d-xl-block">
                  <div className='row g-3 mb-5'>
                      <div className='col image-container'>
                       <img className='img' src={banner} alt='a beautiful lamp' width="300px" height="250px"></img>
                      </div>
                      <div className='col image-container'>
                       <img className='img' src={lamp2} alt='a beautiful lamp' width="300px"height="250px"></img>
                      </div>
                  </div>
                  <div className="row gy-3">
                   <div className="col image-container">
                   <img className='img' src={inspo4} alt='a beautiful lamp' height="300px"></img>
                   </div>
                   <div className="col image-container">
                   <img className='img' src={inspo5} alt='a beautiful lamp' height="300px"></img>
                   </div>
                  </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;