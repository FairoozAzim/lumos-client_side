import './App.css';
import Home from './Pages/HomePage/Home/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Products from './Pages/HomePage/Products/Products';
import Reviews from './Pages/HomePage/Reviews/Reviews';
import Blogs from './Pages/HomePage/Blogs/Blogs';
import Footer from './Pages/Shared/Footer/Footer';
import Collection from './Pages/Collection/Collection';
import Login from './Pages/Login/Login'
import Registration from './Pages/Registration/Registration';
import AuthProvider from './context/AuthContext/AuthProvider';
import Dashboard from './Pages/Dashboard/Dashboard';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header/>
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
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
     

    </div>
  );
}

export default App;
