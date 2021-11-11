import React from 'react';

const SIngleProduct = ({product}) => {
    const {name,price,image} = product;
    return (
      <div>
          
          <h1>{name}</h1>
      </div>  
    );
};

export default SIngleProduct;