import React from 'react';
import './SingleProduct.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from 'react-router-dom';
const SingleProduct = ({product}) => {
    const {_id,name,price,image,description} = product;
    const des = description.slice(0,40);
    return (
      <div className="col">
          <div className="card product-card shadow">
          <img src={image} class="card-img-top rounded" alt="..."/>
          <div className="card-body product-details">
            <div className="product-info">
            <h4 className="card-title fw-bold">{name}</h4>
            <p>{des}...</p>
            <p className="card-text price">${price}</p>
            </div>
            <NavLink to={`/productDetails/${_id}`} className='text-decoration-none'>
            <button className="btn btn-cart ms-5">Add to Cart <ArrowForwardIcon></ArrowForwardIcon></button>
            </NavLink>
          </div>
          </div>
        
      </div>  
    );
};

export default SingleProduct;