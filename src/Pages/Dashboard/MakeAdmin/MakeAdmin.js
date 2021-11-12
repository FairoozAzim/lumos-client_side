import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';

const MakeAdmin = () => {
    
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('https://radiant-citadel-36252.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(d => {
          if(d.modifiedCount){
              console.log(d);
              setSuccess(true);
              reset();
          }
        })       
             
    }

    return (
        <div className="text-center container">
            <h1>Create a New Admin</h1>
             <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input placeholder="Email" {...register("email", { required: true })} /> <br/>
            {errors.name && <span>This field is required</span>} <br/>
            {/* include validation with required or other standard HTML validation rules */}  
            <button type="submit" className="btn btn-primary">Make Admin</button> <br/>
            </form> 
            <br/>
            {success && <Alert variant="success">
                   Admin created successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;