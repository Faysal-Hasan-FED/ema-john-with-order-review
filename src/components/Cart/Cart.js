import React from 'react';

const Cart = props => {
    const {cart} = props;
    const total = cart.reduce((previous,current)=>previous + current.price,0)
    const quantity = cart.reduce((previous,current)=> previous+ current.quantity,0)
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Ordered Items: {quantity}</h4>
            <p>Total Price: {total.toFixed(2)}$</p>
        </div>
    );
};

export default Cart;