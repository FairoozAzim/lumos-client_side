import React from 'react';
import './SingleOrder.css'

const SingleOrder = (props) => {
    const {image, email, productName, address, payment, status,price} = props.order;
    return (
        <div>
            <div className='container d-flex justify-content-around align-items-center mt-5 '>
            <div className='d-flex align-items-center'>
            <img className="rounded me-4" src={image} alt='' height='160px'></img>
             <div>
             <h5>{productName}</h5>
             <p>${price}</p>
             </div>
            </div>
             <p>{email}</p>
             
             <p className="order-info">{payment}</p>
             <p className="order-info">{status}</p>
             {props.children}
            </div>

        </div>
    );
};

export default SingleOrder;