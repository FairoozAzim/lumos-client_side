import React, { useEffect, useState } from 'react';



const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    
    useEffect(() => {
        fetch('https://radiant-citadel-36252.herokuapp.com/lights')
        .then(res => res.json())
        .then(data => setProducts(data));
        },[])

const handleDelete = (id) =>{
    fetch(`https://radiant-citadel-36252.herokuapp.com/lights/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
        const remainingProducts = products.filter(product => product._id!== id);
        setProducts(remainingProducts);
        }
    } )

}

    return (
        <div className="container mx-auto">
            <h1 className="text-center mt-5 mb-5">Manage Products</h1>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Product Image</th>
                    <th scope="col">Price</th>
                    <th scope="col"> Action</th>
                    
                </tr>
                </thead>
            <tbody>
            {
                products.map(product => (
                    <tr key={product._id}>
                                <td>{product.name}</td>
                                <td><img src={product.image} alt='' height="80px" width="100px"></img></td>
                                <td>${product.price}</td>
                                <td><button className='btn btn-danger' onClick={() => handleDelete(product._id)}>Delete Product</button></td>
                               
                               
                            </tr>

                )
                )
            }
          </tbody>
       </table>  
            
        </div>
    );
};

export default ManageProducts;