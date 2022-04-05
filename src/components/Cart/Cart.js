import React from 'react';

const Cart = props => {
    const {cart} = props;
    const quantity = cart.reduce((previous,current)=> previous+ current.quantity,0);
    let total = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Ordered Items: {quantity}</h4>
            <p>Total Price: {total.toFixed(2)}$</p>
        </div>
    );
};

export default Cart;