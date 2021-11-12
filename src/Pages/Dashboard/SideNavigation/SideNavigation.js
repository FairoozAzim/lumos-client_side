import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavigation = () => {
    return (
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-item">
                    <NavLink to='/' className="link px-0 align-middle">
                    <span className="ms-1 d-none d-sm-inline">Home</span>
                    </NavLink>
                </li>
                <li>
                <NavLink to='/myOrders' className="link px-0 align-middle">
                    <span className="ms-1 d-none d-sm-inline mb-2">My Orders</span>
                    </NavLink>
                </li>
                
                <li>
                <NavLink to='/addReview' className="link px-0 align-middle">
                    <span className="ms-1 d-none d-sm-inline mb-2">Leave a Review</span>
                    </NavLink>
                </li>
                <li>
                <NavLink to='/payment' className="link px-0 align-middle">
                    <span className="ms-1 d-none d-sm-inline mb-2">Payment</span>
                    </NavLink>
                </li>
            </ul>
            <hr/>
            <div className=" pb-4">
                <p>Logout</p>
            </div>
        </div>
    </div>
    );
};

export default SideNavigation;