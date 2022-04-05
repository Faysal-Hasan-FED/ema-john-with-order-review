import React from 'react';
import './Product.css';

const Product = props => {
    const {name,seller,price,img} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p><small>By {seller}</small></p>
                <h4>Only at {price}$</h4>
                <button onClick={()=> props.handleAddToCart(props.product)} className='btn-regular'>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;