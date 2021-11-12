import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [singleOrder, setSingleOrder] = useState({});
    useEffect(() => {
        fetch('https://radiant-citadel-36252.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[singleOrder])
    
    const handleStatusChange = (order) => {
        const {name, email, productName, address, payment} = order;
        
        const updateOrder= {name: name, email:email, productName: productName, address: address, payment: payment, status: 'Shipped'}
        setSingleOrder(updateOrder);

        fetch(`https://radiant-citadel-36252.herokuapp.com/orders/${order._id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
          },
          body: JSON.stringify(updateOrder)
        })
         .then(res => res.json())
         .then(data => {
            
         })
         
    }

    return (
        <div className="container ">
            <h1>Manage Orders</h1>
            <table className="table text-start">
                <thead>
                <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Product</th>
                    <th scope="col"> Address</th>
                    <th scope="col"> Payment</th>
                    <th scope="col"> Status</th>
                    
                </tr>
                </thead>
            <tbody>
            {
                orders.map(order => (
                    <tr key={order._id}>
                                <td>{order.name}</td>
                                <td>{order.productName}</td>
                                <td>{order.address}</td>
                                <td>{order.payment}</td>
                                <td>
                                     {
                                         order.status === 'pending'? 
                                         <button onClick={() => handleStatusChange(order)} className="btn">{order.status}</button>
                                         :
                                         <p>{order.status}</p>
                                    
                                     }
                                </td>
                               
                            </tr>

                )
                )
            }
          </tbody>
       </table>  
    </div>
    );
};

export default ManageOrders;