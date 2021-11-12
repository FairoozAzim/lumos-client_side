import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://radiant-citadel-36252.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Reviews</h1>
            <div className="container">
                <div className="row">
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