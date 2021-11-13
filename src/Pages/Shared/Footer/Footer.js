import React from 'react';
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='footer  p-5 mx-auto mt-5' style={{backgroundColor:'black', color:'white'}}>
          <div className='container'>
          <div className='row'>
             <div className='col mt-sm-5'>
            <h4 className="fw-bold text-white">LUMOS</h4>
            <p>An online shop for lamps</p>
            <p>Connect with us!</p>
            <div className='p-2'>
            <FacebookIcon className='me-3 icon'/><InstagramIcon className='me-3 icon'/><TwitterIcon className='me-3 icon'/>
            </div>
            
            </div>
            <div className='col mt-sm-5'>
            <h4 className="fw-bold text-white">Navigation</h4>
            <p><NavLink to='/collection' className='text-decoration-none text-white'>Collection</NavLink></p>
            <p><NavLink to='/reviews' className='text-decoration-none text-white'>Reviews</NavLink></p>
            <p><NavLink to='/blogs' className='text-decoration-none text-white'>Blogs</NavLink></p>
            <p><NavLink to='/dashboard' className='text-decoration-none text-white'>Dashboard</NavLink></p>
            
            </div>
            <div className='col mt-sm-5'>
            <h4 className="fw-bold text-white">Our Outlets</h4>
            <p>Arizona</p>
            <p>Hawaii</p>
            <p>Long Beach</p>
            <p>Los Angeles</p>
            </div>
            <div className='col mt-sm-5'>
            <h4 className="fw-bold text-white">Newsletter</h4>
            <p>Subscribe to our newsletter for product updates.</p>
            <input className='form-control w-75' placeholder='Your Email'></input>
            <input type='submit' className='button-small mt-3'></input>

            </div>
           </div>
          </div>
        </div>
    );
};

export default Footer;