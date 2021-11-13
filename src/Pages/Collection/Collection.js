import React, { useEffect, useState } from 'react';
import SingleProduct from '../HomePage/SingleProduct/SingleProduct';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';



const Collection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://radiant-citadel-36252.herokuapp.com/lights')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    


    return (
        <div>
            <Header/>
            <h1 className='text-center fw-bold mt-5 mb-2'>All Collection</h1>
            <p className='text-center mb-5'>Browse from our collections!</p>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              
                 products.map(product => <SingleProduct
                     key={product._id}
                        product={product}
                        
                        ></SingleProduct>
                 )
                 }
            </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Collection;