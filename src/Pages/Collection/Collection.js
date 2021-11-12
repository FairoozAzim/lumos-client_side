import React, { useEffect, useState } from 'react';
import SingleProduct from '../HomePage/SingleProduct/SingleProduct';
import Header from '../Shared/Header/Header';



const Collection = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/lights')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    


    return (
        <div>
            <Header/>
            <h3>All COllection</h3>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              
                 products.map(product => <SingleProduct
                     key={product._id}
                        product={product}
                        
                        ></SingleProduct>
                 )
                 }
            </div>
            </div>
        </div>
    );
};

export default Collection;