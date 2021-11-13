import * as React from 'react';
import './Dashboard.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {  Switch, Route, useRouteMatch, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MyOrders from '../MyOrders/MyOrders';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../Admin/ManageOrders/ManageOrders'
import AddProducts from '../Admin/AddProducts/AddProducts';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LightIcon from '@mui/icons-material/Light';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddIcon from '@mui/icons-material/Add';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PaymentIcon from '@mui/icons-material/Payment';
import RateReviewIcon from '@mui/icons-material/RateReview';


const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let {path, url} = useRouteMatch();
    const {admin,logout} = useAuth();
    //console.log(admin);

  const drawer = (
    <div className='bg-dark h-100'>
      <Toolbar />
      <Divider />
      
         {
             !admin?
             <List>
             <ListItem>
                <ListItemIcon className="text-white">
                      <HomeIcon/>
                 </ListItemIcon>
                <NavLink to='/' className="side-link">
                Home
                </NavLink>
            </ListItem>
             <ListItem>
                <ListItemIcon className="text-white">
                      <ShoppingCartIcon/>
                 </ListItemIcon>
            <NavLink to={`${url}`} className="side-link">
                     My Orders
            </NavLink>
            </ListItem>
             <ListItem>
                <ListItemIcon className="text-white">
                      <PaymentIcon/>
                 </ListItemIcon>
                 <NavLink to={`${url}/payment`} className="side-link">
                     Payment
                     </NavLink>
            </ListItem>
             <ListItem>
                <ListItemIcon className="text-white">
                      <RateReviewIcon/>
                 </ListItemIcon>
                 <NavLink to={`${url}/addReview`} className="side-link">
                     Leave a Review
                </NavLink>
            </ListItem>
         </List>
         :
         <List>
         <ListItem>
            <ListItemIcon className='text-white'>
                  <HomeIcon/>
             </ListItemIcon>
            <NavLink to='/' className=" side-link">
            Home
            </NavLink>
        </ListItem>
         <ListItem>
            <ListItemIcon className='text-white'>
                  <ShoppingBasketIcon/>
             </ListItemIcon>
             <NavLink to={`${url}`} className="side-link">
                    Manage Orders
                    </NavLink>
        </ListItem>
         <ListItem>
            <ListItemIcon className="text-white">
                  <AddIcon/>
             </ListItemIcon>
             <NavLink to={`${url}/addProducts`} className="side-link">
                    Add New Product
                    </NavLink>
        </ListItem>
         <ListItem>
            <ListItemIcon className="text-white">
                  <LightIcon/>
             </ListItemIcon>
             <NavLink to={`${url}/manageProducts`} className="side-link">
            Manage Products
            </NavLink>
        </ListItem>
         <ListItem>
            <ListItemIcon className="text-white">
                 <SupervisorAccountIcon/>
             </ListItemIcon>
             <NavLink to={`${url}/makeAdmin`} className="side-link">
            Create New Admin
            </NavLink>
        </ListItem>
     </List>
         }
      <button className='side-link btn ms-2 ' onClick={logout}> <LogoutIcon className="me-4"/> Logout</button>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='bg-dark'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
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
     
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
