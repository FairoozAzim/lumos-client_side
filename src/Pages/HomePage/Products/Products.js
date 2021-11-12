import React, { useEffect, useState } from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import SingleProduct from '../SingleProduct/SingleProduct';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://radiant-citadel-36252.herokuapp.com/lights')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    


    return (
        <div>
            <h3 className="text-center mt-5 mb-5">Display Products</h3>
            <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              
                 products.slice(0,6).map(product => <SingleProduct
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

export default Products;