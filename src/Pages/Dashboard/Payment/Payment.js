import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './Payment.css'
import visa from '../../../images/download.png'


const Payment = () => {
    const{user} = useAuth();
    return (
        <div className="container-fluid">
        <h1 className='fw-bold text-center mb-5 mt-5'>Checkout</h1>
        <div className="row">
         <div className="col-12 col-lg-6">
         <h3 className='fw-bold'>Personal Details</h3>
         <hr className="line w-75"></hr>
         <form>
         <input className="form-control w-50" defaultValue={user.displayName}></input> <br/>
         <input className="form-control w-50" placeholder='Country'></input><br/>
         <input className="form-control w-50" placeholder='Street Address'></input><br/>
         <input className="form-control w-50" placeholder='Apartment No, Road No. Suite No.'></input><br/>
         <input className="form-control w-50" placeholder='City'></input><br/>
         <input className="form-control w-50" placeholder='State'></input><br/>
         <input className="form-control w-50" placeholder='Postcode/ ZIP'></input><br/>
         </form>
         <br/>
         <h3 className="fw-bold">Payment Method</h3>
         <hr className="line w-75"></hr>
         <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label className="form-check-label" for="inlineRadio1">PayPal</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" for="inlineRadio2" checked>Credit Card</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
            <label className="form-check-label" for="inlineRadio3">Bank Transfer</label>
        </div>
         </div>
         <div className="col-12 col-lg-6 mt-5">
         <div className="d-flex"> 
         <h3 className="me-5 fw-bold">Credit Card Details</h3>
         <img src={visa} alt='' height="30px" className="ms-5" ></img>
         </div>
         <hr className="line w-75"></hr>
         <input className="form-control w-50" placeholder='Name on card'></input> <br/>
         <input className="form-control w-50" type='password' placeholder='Card Number'></input> <br/>
         <div className="d-flex ">
         <input className="form-control w-25 me-2" placeholder='Valid through (MM/YY)'></input> <br/>
         <input className="form-control w-25"  placeholder='CVV (3 digits)'></input> <br/>
         
         </div>
         <div className="promo-bg mt-5 pb-3">
             <h5 className="mb-3">Add Promo Code</h5>
             <div className="d-flex align-items-center justify-content-between">
             <input className="form-control w-50" placeholder='Promo'></input>
             <button className="btn button d-inline h-25 rounded-pill"> Apply</button>
             </div>
         </div>
         <button className="btn button mt-5">Checkout</button>
         </div>
        </div>
   </div>
    );
};

export default Payment;