import React, { useEffect, useState } from 'react';
import { Alert, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../../Shared/Header/Header';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

const ProductDetails = () => {
    const {productId} = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    //console.log(loading);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user} = useAuth();

    
    useEffect(() => {
        fetch(`https://radiant-citadel-36252.herokuapp.com/lights/${productId}`)
        .then(res => res.json())
        .then(data => {
            setProductDetail(data)
            if(data._id){
            setLoading(false);
            }
        }
     );
    },[])

    const{name, price, image, description} = productDetail;
    const status = 'pending';
    const onSubmit = data => {
        const order = {...data, status,image, price};
        console.log(order);
        fetch('https://radiant-citadel-36252.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data => {
         console.log(data)
         if(data.acknowledged){
             setSuccess(true);
         }
        
          reset();

        })   
    }


    //console.log(productDetail);
    
    
    

    return (
        <div>
            <Header/>
            {
                loading? <Spinner animation="border" role="status"></Spinner>
                :
                <div className="container mt-5 mx-auto p-5">
                <div className='row container'>
                    <div className='col-6'>
                     <img src={image} alt='lamp'height="380px"></img>
                    </div>
                    <div className='col-4'>
                       <h3>{name}</h3>
                       <p>{description}</p>
                        <h5>${price}</h5>
                        <h5>Order Details</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input readOnly defaultValue = {user?.displayName} {...register("name")} /> 
                       
                        <input readOnly defaultValue = {user?.email} {...register("email")} /> 
                        
                        <input readOnly defaultValue={name} {...register("productName")} /> <br/>
                        <input placeholder="Address" {...register("address", {required : true})} /> <br/>
                        <select className='reg' {...register("payment", {required: true})}>
                        <option value="" disabled selected hidden>Payment Option</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="card">Card Payment</option>
                        <option value="paypal">Paypal</option>
                        
                        </select> <br/> <br/>
                        
                        <button type='submit' className="btn btn-primary mt-5">Add to Cart</ button>
                        </form> 

                        {success && <Alert variant="success">
                          Added to cart</Alert>}
                    </div>
                     <NavLink to='/'>
                     <button className="btn"><ArrowBackIcon/> Back to Home</button>

                         </NavLink>   
                </div>
               </div>
            }
        </div>
    );
};

export default ProductDetails;