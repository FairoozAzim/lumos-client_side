import React from 'react';
import { useForm } from "react-hook-form";

const AddReview = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        reset();
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
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
            
        </div>
    );
};

export default AddReview;