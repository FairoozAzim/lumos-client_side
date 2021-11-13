import React from 'react';
import './Login.css'
import { useForm } from "react-hook-form";
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Alert, Spinner } from 'react-bootstrap';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
const Login = () => {
    
    const{login, isLoading, authError, user} = useAuth();
    const location = useLocation();
    const history = useHistory();
    
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {email, password} = data;
        login(email,password, location, history);
        reset();
    }

    return (
        <div>
            <Header/>
        <div className='container login mx-auto text-center'>
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className='form-control w-50 w-lg-25 mx-auto mt-5' placeholder="Email" {...register("email")} /> <br/>
            {errors.email && <span>This field is required</span>}
            
            {/* include validation with required or other standard HTML validation rules */}
            <input className='form-control w-50 w-lg-25  mx-auto' placeholder="Password" type="password" {...register("password", { required: true })} /> <br/>
            {/* errors will return when field validation fails  */}
            {errors.password && <span>This field is required</span>}
            
            <input type="submit" className='btn button h-25 mt-5' />
            </form> 
            {isLoading && <Spinner animation="border" role="status"></Spinner>} <br/>
            {user?.email && <Alert variant="success">
                   Login Successful!</Alert>}
            {
                authError && <Alert variant="danger">
                 {authError}
              </Alert>
            }
           <hr className='mx-auto w-25'/>
            <p>New User?</p>
            <NavLink to='/registration' className='text-decoration-none btn button'>
                Register
            </NavLink>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Login;