import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Cart = (props) => {
    const cart = props.cart;
    //const user = useContext(UserContext);
    //const total = cart.reduce((total, product) => total + product.price, 0);
    
    let quantity = 0;
    let price = 0;
    let total = 0;

    for(let i=0; i<cart.length; i++){
        const value = cart[i];
        quantity = quantity + value.quantity;
        price = value.price;
        total = total + value.price * value.quantity;
    }

    let shipping = 0;
    if(total > 50){
        shipping = 0;
    }else if(total > 20){
        shipping = 5;
    }else if(total > 0){
        shipping = 15;
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Summary: {cart.length}</h5>
            <h5>Total Quantity: {quantity}</h5>
            <h5>Shipping:{shipping}</h5>
            <h5>Product Price:{price}</h5>
            <h5>Total Price:{total + shipping}</h5>
            <br/>
            {
                props.children
            }
            <p>{}</p>
        </div>
    );
};

export default Cart;