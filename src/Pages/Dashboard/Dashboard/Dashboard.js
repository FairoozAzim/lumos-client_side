import React from 'react';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AddReview from '../AddReview/AddReview';
import AddProducts from '../Admin/AddProducts/AddProducts';
import ManageOrders from '../Admin/ManageOrders/ManageOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import './Dashboard.css'

const Dashboard = () => {
   
    let {path, url} = useRouteMatch();
    const {admin,logout} = useAuth();
    console.log(admin);
 
    return (
    <div>
     <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 mx-auto text-center fs-4">Dashboard</span>
        </div>
        </nav>
      <div className="container-fluid">
      <div className="row flex-nowrap">
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-3 bg-dark">
        <div className="d-flex flex-column align-items-center align-items-sm-start text-white min-vh-100">
            <h3 className="mt-3 ms-4">LUMOS</h3>
            <hr className="line"></hr>
                       
            {
                !admin? 
                <ul className="navigation flex-column mb-sm-auto align-items-center align-items-sm-start">
                 <li className="">
                     <NavLink to='/' className="side-link px-0 align-middle">
              <span className="ms-1 d-none d-sm-inline">Home</span>
                     </NavLink>
                 </li>
                 <li className="">
                 <NavLink to={`${url}`} className="side-link px-0 align-middle">
                     <span className="ms-1 d-none d-sm-inline mb-2">My Orders</span>
                     </NavLink>
                 </li>
        
                
                 <li className="nav-item">
                 <NavLink to={`${url}/payment`} className="side-link px-0 align-middle">
                     <span className="ms-1 d-none d-sm-inline mb-2">Payment</span>
                     </NavLink>
                 </li>
                 <li className="nav-item">
                 <NavLink to={`${url}/addReview`} className="side-link px-0 align-middle">
                     <span className="ms-1 d-none d-sm-inline mb-2">Leave a Review</span>
                     </NavLink>
                 </li>
                </ul>
                :
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  <li className="nav-item">
                     <NavLink to='/' className="side-link px-0 align-middle">
                     <span className="ms-1 d-none d-sm-inline">Home</span>
                     </NavLink>
                 </li>   
                <li className="nav-item">
                <NavLink to={`${url}`} className="side-link px-0 align-middle">
                    <span className="ms-1 d-none d-sm-inline mb-2">Manage Orders</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={`${url}/addProducts`} className="side-link px-0 align-middle">
                    <span className="ms-1 d-none d-sm-inline mb-2">Add New Product</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={`${url}/manageProducts`} className="side-link px-0 align-middle">
                    <span className="ms-1 d-none d-sm-inline mb-2">Manage Products</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                <NavLink to={`${url}/makeAdmin`} className="side-link px-0 align-middle">
                    <span className="ms-1 d-none d-sm-inline mb-2">Create New Admin</span>
                    </NavLink>
                </li>
            </ul>
         }
            <hr/>
            <div className="pb-4">
                <button className="btn button ms-5" onClick={logout}>Logout</button>
            </div>
        </div>
    </div>
        <div className="col py-3">
        {
            !admin ? 
            <Switch >
            <Route exact path = {path}>
            <MyOrders></MyOrders>
            </Route>
            <Route path = {`${path}/addReview`}>
            <AddReview></AddReview>
            </Route>
            <Route  path = {`${path}/payment`}>
            <Payment></Payment>
            </Route>
            <Route  path = {`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
            </Route>
        </Switch> 
        :
        <Switch>
            <Route exact path = {path}>
            <ManageOrders></ManageOrders>
            </Route>
            <Route path = {`${path}/addProducts`}>
            <AddProducts></AddProducts>
            </Route>
            <Route  path = {`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
            </Route>
            <Route  path = {`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
            </Route>
        </Switch>
        }
        </div>
    </div>
    </div>
        </div>
    );
};

export default Dashboard;