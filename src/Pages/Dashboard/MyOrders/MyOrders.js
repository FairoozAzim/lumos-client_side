import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';
import './MyOrders.css'

const MyOrders = () => {
    const {user} = useAuth();
    //console.log(user.email);
    const [myOrders, setMyOrders] = useState([]);
    const length = myOrders.length;

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data));
    },[])

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
            const remainingOrders = myOrders.filter(order => order._id!== id);
            setMyOrders(remainingOrders);
            }
        } )
    
    }
    
    return (
        <div className="container p-3">
            <h1>My Orders</h1>
            <h4>Total Orders : {length}</h4>
             <div className='orders-display p-2 rounded'>
             {
                 myOrders.map(order => <SingleOrder
                 key={order._id}
                 order = {order}
                >
                <button className="btn button" onClick={() => handleDelete(order._id)}>Cancel Order</button>
                 </SingleOrder>)
             }
             </div>
        </div>
    );
};

export default MyOrders;