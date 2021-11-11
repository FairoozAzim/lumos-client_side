import React from 'react';

import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
   
  const {user,logout} = useAuth();
  console.log(user);
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">LUMOS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to='/' class="nav-link active">Home</NavLink>
            </li>
            {user?.email && <li class="nav-item">
              <NavLink to='/dashboard' class="nav-link active">Dashboard</NavLink>
            </li>}
          </ul>
          {
            user?.displayName && <p className="text-white">{user.displayName}</p>
          }
          {
            user?.email ? 
            
            <button className='btn link' onClick={logout}>Logout</button>
           
            : 
            <NavLink to='/login'>
            <button className='btn link'>Login</button>
          </NavLink>
          }
        </div>
      </div>
    </nav>
    );
};

export default Header;