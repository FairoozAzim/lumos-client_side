import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://radiant-citadel-36252.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div>
            <h1 className="text-center mt-5 mb-5 header">Reviews</h1>
            <div className="container bg-review">
                <div className="row g-5">
            {
                reviews.map(review => <SingleReview
                key={review._id}
                review= {review}
                ></SingleReview>)
            }
            </div>
         </div>
        </div>
    );
};

export default Reviews;