import React, { useEffect } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { NavLink , useHistory} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Registration = () => {

    const {registerUser, isLoading, authError, user}  = useAuth();
    const history = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.password !== data.passwordConfirm){
            alert("Password didn't matched");
        }
        const {name,email, password} = data;
        registerUser( email, password,name, history);
        reset();
    };


    return (
        <div className="container text-center mt-5">
            <h1>Registration</h1>
           { !isLoading && <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder="Full Name" {...register("name", { required: true })} /> <br/>
            {errors.name && <span>This field is required</span>} <br/>
            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder="Email" {...register("email", { required: true })} /> <br/>
            {errors.email && <span>This field is required</span>} <br/>
            {/* include validation with required or other standard HTML validation rules */}
            <input placeholder="Password" {...register("password", { required: true })} /> <br/>
            {/* errors will return when field validation fails  */}
            {errors.password && <span>Password should be at least 6 characters</span>}<br/>
            <input placeholder="Retype Password" {...register("passwordConfirm", { required: true })} /><br/>
            {/* errors will return when field validation fails  */}
            {errors.passwordConfirm && <span>This field is required</span>}<br/>
            
            <input type="submit"/> <br/>
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
            <p>Already Registered? </p>
            <NavLink to='/login'>
                Login
            </NavLink>
        </div>
    );
};

export default Registration;