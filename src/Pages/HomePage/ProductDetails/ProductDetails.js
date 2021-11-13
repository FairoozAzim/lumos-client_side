import React, { useEffect, useState } from 'react';
import {  Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../../Shared/Header/Header';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {
    const {productId} = useParams();
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);
    //console.log(loading);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const {user} = useAuth();

    const notify = () => toast.success("Added to cart");

    
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
        //console.log(order);
        fetch('https://radiant-citadel-36252.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(order)

        })
        .then(res => res.json())
        .then(data => {
         //console.log(data)
         if(data.acknowledged){
             notify();
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
                    <div className='col mb-5 mx-auto'>
                     <img src={image} alt='lamp'height="300px"></img>
                    </div>
                    <div className='col'>
                       <h1 className='fw-bold mb-5'>{name}</h1>
                       <p>{description}</p>
                        <h3 className="fw-bold mt-5">${price}</h3>
                    </div>
                    <div className=''>
                    <h5 className='header mb-3'>Order Details</h5>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <input className='form-control p-3' readOnly defaultValue = {user?.displayName} {...register("name")} /> <br/>
                       
                        <input className='form-control p-3' readOnly defaultValue = {user?.email} {...register("email")} /> <br/>
                        
                        <input className='form-control p-3' readOnly defaultValue={name} {...register("productName")} /> <br/>
                        <input className='form-control p-3' placeholder="Address" {...register("address", {required : true})} /> <br/>
                        <select className='form-select p-3' {...register("payment", {required: true})}>
                        <option value="" disabled selected hidden>Payment Option</option>
                        <option value="bank">Bank Transfer</option>
                        <option value="card">Card Payment</option>
                        <option value="paypal">Paypal</option>
                        
                        </select> <br/> <br/>
                        
                        <button type='submit' className="btn button mt-5">Add to Cart</ button>
                        </form> 
                        <ToastContainer position="bottom-center"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover/>

                    </div>
                     <NavLink to='/'>
                     <button className="btn mt-5 fs-4 "><ArrowBackIcon/> Back to Home</button>
                         </NavLink>   
                </div>
               </div>
            }
        </div>
    );
};

export default ProductDetails;