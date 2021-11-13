import React from 'react';
import blog1 from '../../../images/blog1.jpg'
import blog2 from '../../../images/blog2.jpg'
import blog3 from '../../../images/blog3.jpg'
import blog4 from '../../../images/inspo1.jpg'


const Blogs = () => {
    return (
        <div className='container mt-5'>
            <h2 className="header text-center mb-5">Design Ideas</h2>
            <div className="row">
            <div className='col'>
            <img src={blog2} alt=''></img>
            <h3 className="fw-bold mt-3">Choosing the right lampshade shape for your lamp</h3>
            <p>If you want to replace your current lampshade for another, take into consideration the different shapes available. From a drum/cylinder, floor, empire, coolie or the traditional bell type will help set the design style in your room.</p>
            </div>
            <div className='col'>
             <h3 className='mb-3 fw-bold'>More Design Inspos</h3>
             <div className='row'>
              <div className="col-4">
               <img src={blog1} alt='' width='200px'></img>
              </div>
              <div className="col-7 ms-2">
               <h5 className="fw-bold"><a href='https://www.mymove.com/home-inspiration/decoration-design-ideas/quick-tips-for-choosing-the-perfect-lampshade/' className='text-decoration-none text-dark'><u>Bring lampshades into unconventional rooms in your home</u> </a> </h5>
               <p>hen looking for the right lampshade, remember that lamps can go in your bathroom, basement or laundry room. </p>
              </div>
             </div>
             <div className='row'>
              <div className="col-4">
               <img src={blog3} alt='' width='200px'></img>
              </div>
              <div className="col-7 ms-2">
               <h5 className="fw-bold"><a href='https://www.mymove.com/home-inspiration/decoration-design-ideas/quick-tips-for-choosing-the-perfect-lampshade/' className='text-decoration-none text-dark'><u>Bring lampshades into unconventional rooms in your home</u></a> </h5>
               <p>hen looking for the right lampshade, remember that lamps can go in your bathroom, basement or laundry room. </p>
              </div>
             </div>
             <div className='row'>
              <div className="col-4">
               <img src={blog4} alt='' width='200px'></img>
              </div>
              <div className="col-7 ms-2">
               <h5 className="fw-bold"><a href='https://www.mymove.com/home-inspiration/decoration-design-ideas/quick-tips-for-choosing-the-perfect-lampshade/' className='text-decoration-none text-dark'><u>Bring lampshades into unconventional rooms in your home</u> </a></h5>
               <p>hen looking for the right lampshade, remember that lamps can go in your bathroom, basement or laundry room. </p>
              </div>
             </div>
            </div>

            </div>
        </div>
    );
};

export default Blogs;