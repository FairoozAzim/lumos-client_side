import { Rating } from '@mui/material';
import React from 'react';

const SingleReview = (props) => {
    const{name,review,rating} = props.review;
    console.log(props.review);
    return (
        <div className="col-4 text-center">
            <Rating name="read-only" value={rating} readOnly />
            <p>{review}</p>
            <p>{name}</p>
        </div>
    );
};

export default SingleReview;