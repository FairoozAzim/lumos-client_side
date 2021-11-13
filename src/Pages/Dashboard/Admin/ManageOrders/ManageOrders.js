import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ManageOrder.css'
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [singleOrder, setSingleOrder] = useState({});
    const length = orders.length;

    //console.log(singleOrder);
    useEffect(() => {
        fetch('https://radiant-citadel-36252.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setOrders(data));
    },[singleOrder])
    
    //toast
    const notify = () => toast.success("Order status updated successfully");


    //update status
    const handleStatusChange = (order) => {
        const {name, email, productName, address, payment} = order;
        //console.log(order);
        
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
             //console.log(data);
            if(data.modifiedCount > 0)
            {
                console.log(data);
                setSingleOrder(data);
                notify();
            }
         })
         
    }
    
    //delete order
    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed) {
            fetch(`https://radiant-citadel-36252.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
            const remainingProducts = orders.filter(order => order._id!== id);
            setOrders(remainingProducts);
            }
        })
    }
    
    }

    return (
        <div className="container mx-auto">
            <h1  className='fw-bold mt-5 mb-5 text-center'>Manage Orders</h1>
            <h4>Total Orders Found : <span className='fw-bold'> {length} </span></h4>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
           <div className='table-responsive'>
           <table className="table text-start">
                <thead>
                <tr>
                    <th scope="col">Customer</th>
                    <th scope="col">Product</th>
                    <th scope="col" > Address</th>
                    <th scope="col" > Payment</th>
                    <th scope="col"> Status</th>
                    <th scope="col"> Confirm Order</th>
                    <th scope="col"> Cancel Order</th>
                    
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
                                <td> {order.status}</td>
                                <td>
                                    {
                                        order.status === 'Shipped'?
                                        <p>Order Confirmed</p>
                                        :
                                        <button onClick={() => handleStatusChange(order)} className="btn button-action"><CheckIcon/> Update Status</button>
                                    } 
                                    </td>
                                    <td><button onClick={() => handleDelete(order._id)} className="btn button-action">
                                      <DeleteOutlineIcon/>  Delete Order</button></td>
                               
                            </tr>

                )
                )
            }
          </tbody>
       </table> </div> 
       
    </div>
    );
};

export default ManageOrders;