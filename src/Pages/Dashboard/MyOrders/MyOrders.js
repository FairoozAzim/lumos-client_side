import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import SingleOrder from '../SingleOrder/SingleOrder';
import './MyOrders.css'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const MyOrders = () => {
    const {user} = useAuth();
    //console.log(user.email);
    const [myOrders, setMyOrders] = useState([]);
    const length = myOrders.length;

    useEffect(() => {
        fetch(`https://radiant-citadel-36252.herokuapp.com/orders?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyOrders(data));
    },[])

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure you want to delete?')
        if(proceed){
            fetch(`https://radiant-citadel-36252.herokuapp.com/orders/${id}`, {
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
       
    
    }
    
    return (
        <div className="container p-3">
            <h1 className='fw-bold text-center mt-5 mb-3'>My Orders</h1>
            <h4 className='mb-3'>Total Orders : {length}</h4>
             <div className='orders-display p-3 rounded'>
             {
                 myOrders.map(order => <SingleOrder
                 key={order._id}
                 order = {order}
                >
                <button className="btn button-action" onClick={() => handleDelete(order._id)}><DeleteOutlineIcon/> Cancel Order</button>
                 </SingleOrder>)
             }
             </div>
        </div>
    );
};

export default MyOrders;