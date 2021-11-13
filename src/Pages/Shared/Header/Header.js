import React from 'react';
import PersonIcon from '@mui/icons-material/Person';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
   
  const {user,logout} = useAuth();
  //console.log(user);
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <h3 className='brand'>LUMOS</h3>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mx-auto  mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to='/' class="nav-link link me-5 fw-bold">Home</NavLink>
            </li>
            <li class="nav-item">
              <NavLink to='/collection' class="nav-link link me-5 fw-bold">Collection</NavLink>
            </li>
            {user?.email && <li class="nav-item">
              <NavLink to='/dashboard' class="nav-link link fw-bold">Dashboard</NavLink>
            </li>}
          </ul>
          {
            user?.displayName && <h4 className=" nav-link link me-2"><PersonIcon className='me-2'/>{user.displayName}</h4>
          }
          {
            user?.email ? 
            
            <button className='nav-link link me-5 btn fw-bold' onClick={logout}>Logout</button>
           
            : 
            <NavLink to='/login' className='link'>
            <button className='btn link nav-link  me-5 fw-bold'>Login</button>
          </NavLink>
          }
        </div>
      </div>
    </nav>
    );
};

export default Header;