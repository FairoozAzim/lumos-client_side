import React from 'react';
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import useAuth from '../../../hooks/useAuth';
import { Alert } from '@mui/material';

const AddReview = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [rating, setRating] = React.useState(5);
    const [success, setSuccess] = React.useState(false);
    const {user} = useAuth();
    
    // console.log(rating);
    const onSubmit = data => {
        const {name, review} = data;
        const reviewData = {name, review, rating}
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(reviewData)

        })
        .then(res => res.json())
        .then(data => {
         //console.log(data)
         if(data.acknowledged){
             setSuccess(true);
         }
        
          reset();

        })       
    };
    return (
        <div className="text-center">
            <h1 className="mb-3">Leave a review!</h1>
            <p className="mb-5">Let us know your experience with our products. Your review can help others to choose us! </p>
             <h5>Rate Us!</h5>
             <Rating
                name="simple-controlled"
                value={rating}
                onChange={(event,newValue) => {
                setRating(newValue);
                }}
            />
            <form onSubmit={handleSubmit(onSubmit)}>
            {/* register your input into the hook by invoking the "register" function */}
            <input readOnly defaultValue = {user?.displayName} className=" form-control w-50 mx-auto text-center mt-3" {...register("name", { required: true })} />
            {errors.name && <span>This field is required</span>} <br/>
            {/* include validation with required or other standard HTML validation rules */}
            <textarea placeholder="Write Review" className="form-control w-50 mx-auto" type="text" {...register("review", { required: true })} /> <br/>
            {errors.email && <span>This field is required</span>} <br/>
            {/* include validation with required or other standard HTML validation rules */}
            <input type="submit" className="button"/> <br/>
            {success && <Alert variant="success">
                   Admin created successfully!</Alert>}
            </form> 
            
        </div>
    );
};

export default AddReview;