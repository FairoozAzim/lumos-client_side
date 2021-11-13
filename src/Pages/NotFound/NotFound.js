import React from 'react';
import { NavLink } from 'react-router-dom';
import notfound from '../../images/notfound.jpg'

const NotFound = () => {
    return (
        <div>
           <h1 className='text-center' style={{fontSize:'260px'}}>404</h1>
           <h4 className='text-center'>Sorry, the page you were looking for was not found.</h4>
           <div className='text-center'>
           <button className='btn button text-center p-2 mt-5 h-50'>
           <NavLink to='/' className='text-decoration-none text-white'>
           View Homepage
           </NavLink>
           </button>
           </div>
        </div>
    );
};

export default NotFound;