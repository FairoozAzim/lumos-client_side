import React from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddProducts = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = React.useState(false);
    const onSubmit = data => {
        console.log(data);
        fetch('https://radiant-citadel-36252.herokuapp.com/lights', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(data => {
         //console.log(data)
         if(data.acknowledged){
            setSuccess(true);
         }
        
          reset();

        })       
          }
            
    return (
        <div className="text-center">
           <h1>Add a New Product</h1> 
           <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input className='form-control mx-auto mt-5 w-50' placeholder="Product Name" {...register("name", { required: true })} /> 
            {errors.name && <span>This field is required</span>} 
            <input className='form-control mx-auto mt-5 w-50' placeholder="Description" {...register("description", { required: true })} /> 
            {errors.name && <span>This field is required</span>} 
            <input className='form-control mx-auto mt-5 w-50' placeholder="Price" {...register("price", { required: true })} /> 
            {errors.name && <span>This field is required</span>} 
            <input className='form-control mx-auto mt-5 w-50' placeholder="Image Url" {...register("image", { required: true })} /> 
            {errors.name && <span>This field is required</span>} <br/>
            {/* include validation with required or other standard HTML validation rules */}  
            <button type="submit" className="btn button">Add Product</button> <br/>
            </form> 
            {success && <Alert variant="success">
                   Product Added to Database</Alert>}
        </div>
    );
};

export default AddProducts;