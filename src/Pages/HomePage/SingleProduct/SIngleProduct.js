import React from 'react';
import './SingleProduct.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { NavLink } from 'react-router-dom';
const SingleProduct = ({product}) => {
    const {_id,name,price,image,description} = product;
    const des = description.slice(0,40);
    return (
      <div className="col">
          <div className="card product-card">
          <img src={image} class="card-img-top" alt="..."/>
          <div className="card-body product-details">
            <div className="product-info">
            <h5 className="card-title">{name}</h5>
            <p>{des}...</p>
            <p className="card-text">${price}</p>
            </div>
            <NavLink to={`/productDetails/${_id}`}>
            <button className="btn btn-cart">Add to Cart <ArrowForwardIcon></ArrowForwardIcon></button>
            </NavLink>
          </div>
          </div>
        
      </div>  
    );
};

export default SingleProduct;