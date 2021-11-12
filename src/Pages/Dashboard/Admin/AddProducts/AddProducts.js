import React from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddProducts = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = React.useState(false);
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/lights', {
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
            <input placeholder="Product Name" {...register("name", { required: true })} /> <br/>
            {errors.name && <span>This field is required</span>} <br/>
            <input placeholder="Description" {...register("description", { required: true })} /> <br/>
            {errors.name && <span>This field is required</span>} <br/>
            <input placeholder="Price" {...register("price", { required: true })} /> <br/>
            {errors.name && <span>This field is required</span>} <br/>
            <input placeholder="Image Url" {...register("image", { required: true })} /> <br/>
            {errors.name && <span>This field is required</span>} <br/>
            {/* include validation with required or other standard HTML validation rules */}  
            <button type="submit" className="btn btn-primary">Add Product</button> <br/>
            </form> 
            {success && <Alert variant="success">
                   Admin created successfully!</Alert>}
        </div>
    );
};

export default AddProducts;