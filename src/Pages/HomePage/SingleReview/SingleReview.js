import { Rating } from '@mui/material';
import React from 'react';

const SingleReview = (props) => {
    const{name,review,rating} = props.review;
    console.log(props.review);
    return (
        <div className="col-12 col-lg-4 text-center">
            {/* //<Rating name="read-only" value={rating} readOnly /> */}
            <div className="card mb-5 h-100 shadow " style={{backgroundColor: 'whitesmoke'}}>
            <div className="card-body">
                <h5 className="card-title mb-5 fw-bold">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted"> 
                <Rating name="read-only" value={rating} readOnly />
                </h6>
                <p className="card-text">{review}</p>
               
            </div>
            </div>
            
        </div>
    );
};

export default SingleReview;