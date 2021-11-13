import React, { useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import { NavLink , useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
const Registration = () => {

    const {registerUser, isLoading, authError, user}  = useAuth();
    
    
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.password !== data.passwordConfirm){
            alert("Password didn't matched");
        }
        else{
            const {name,email, password} = data;
            registerUser( email, password,name, history);
            reset();
        }
        
    };


    return (
        <div>
        <Header/>
        <div className="container text-center mt-5">
            <h1>Registration</h1>
           { !isLoading && <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className='form-control' placeholder="Full Name" {...register("name", { required: true })} /> <br/>
            {errors.name && <span>This field is required</span>} <br/>
            {/* include validation with required or other standard HTML validation rules */}
            <input className='form-control' placeholder="Email" {...register("email", { required: true })} /> <br/>
            {errors.email && <span>This field is required</span>} <br/>
            {/* include validation with required or other standard HTML validation rules */}
            <input className='form-control' placeholder="Password" type="password" {...register("password", { required: true })} /> <br/>
            {/* errors will return when field validation fails  */}
            {errors.password && <span>Password should be at least 6 characters</span>}<br/>
            <input className='form-control' placeholder="Retype Password" type="password" {...register("passwordConfirm", { required: true })} /><br/>
            {/* errors will return when field validation fails  */}
            {errors.passwordConfirm && <span>This field is required</span>}<br/>
            
            <input className='btn button' type="submit"/> <br/>
            </form> 
            }
            {isLoading && <Spinner animation="border" role="status">
                </Spinner>}
            {user?.email && <Alert variant="success">
                   Registration Successful!</Alert>}
            {
                authError && <Alert variant="danger">
                 {authError}
              </Alert>
            }
            <hr className='w-25 mx-auto'/>
            <p className='mt-5'>Already Registered? </p>
            <NavLink to='/login' className='text-decoration-none btn button'>
                Login
            </NavLink>
        </div>
        <Footer/>
        </div>
    );
};

export default Registration;