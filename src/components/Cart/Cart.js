import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //console.log(cart)
    //const total = cart.reduce((total, product) => total + product.price, 0);
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const value = cart[i];
        total = total + value.price;
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
            <h5>Shipping:{shipping}</h5>
            <h5>subTotal Price:{total}</h5>
            <h5>Total Price:{total + shipping}</h5>
        </div>
    );
};

export default Cart;