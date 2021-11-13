import React, { useEffect, useState } from 'react';
import './Product.css'

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import SingleProduct from '../SingleProduct/SingleProduct';
import { NavLink } from 'react-router-dom';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://radiant-citadel-36252.herokuapp.com/lights')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    


    return (
        <div>
            <h3  className="text-center header mb-5">Our Latest Products</h3>
            <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4">
            {
              
                 products.slice(0,6).map(product => <SingleProduct
                     key={product._id}
                        product={product}
                        
                        ></SingleProduct>
                 )
                 }
                
                <button className="btn button mx-auto mb-5 mt-5 w-25">
                <NavLink to='/collection' activeStyle={{
                 fontWeight: "bold",
                  color: "white" }} className='text-decoration-none text-white'> View More
                </NavLink>
                </button>
            </div>
            </div>
        </div>
    );
};

export default Products;