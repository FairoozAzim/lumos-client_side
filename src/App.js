import './App.css';
import Home from './Pages/HomePage/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Products from './Pages/HomePage/Products/Products';
import Reviews from './Pages/HomePage/Reviews/Reviews';
import Blogs from './Pages/HomePage/Blogs/Blogs';
import Collection from './Pages/Collection/Collection';
import Login from './Pages/Login/Login'
import Registration from './Pages/Registration/Registration';
import AuthProvider from './context/AuthContext/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ProductDetails from './Pages/HomePage/ProductDetails/ProductDetails';
import NotFound from './Pages/NotFound/NotFound';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route  path="/home">
         <Home></Home>
        </Route>
        <Route  path="/products">
         <Products></Products>
        </Route>
        <PrivateRoute  path="/productDetails/:productId">
         <ProductDetails></ProductDetails>
        </PrivateRoute>
        <Route  path="/reviews">
         <Reviews></Reviews>
        </Route>
        <Route path="/blogs">
         <Blogs></Blogs>
        </Route>
        <Route path="/collection">
        <Collection></Collection>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/registration">
        <Registration></Registration>
        </Route>
        <PrivateRoute path="/dashboard">
        <Dashboard></Dashboard>
        </PrivateRoute>
       
        <Route to='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
    
      </BrowserRouter>
      </AuthProvider>
     

    </div>
  );
}

export default App;
