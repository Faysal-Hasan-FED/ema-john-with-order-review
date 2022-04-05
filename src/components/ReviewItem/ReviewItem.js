import React from 'react';

const ReviewItem = (props) => {
    console.log(props.product)
    const {name,quantity,price,key} = props.product;
    return (
        <div className='product-container'>
            <div>
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <p>Quantity: {quantity}</p>
            <button onClick={()=>{props.handleRemove(key)}} className="btn-regular">Remove</button>
            </div>
        </div>
    );
};

export default ReviewItem;