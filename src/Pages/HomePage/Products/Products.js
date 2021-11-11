import React, { useEffect, useState } from 'react';
import SIngleProduct from '../SingleProduct/SIngleProduct';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/lights')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    


    return (
        <div>
            <h3>Display Products</h3>
            {
               <Container>
                   <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                     {
                        products.slice(0,6).map(product => <SIngleProduct
                        key={product.id}
                        product={product}
                        
                        ></SIngleProduct>
                        
                        )}
                       
                    </Grid>
                    </Box>
               </Container>
            }
        </div>
    );
};

export default Products;