import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb'


const OrderReview = () => {
    const [products] = useProducts();
    const [cart,setCart] = useCart(products);

    // lift up the state for remove button
    const handleRemove = key =>{
        // for displaying after removing
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        // remocve from the db also 
        removeFromDb(key);
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    cart.map(product => <ReviewItem
                    handleRemove ={handleRemove}
                         key={product.key}
                          product={product}></ReviewItem>)
                }

            </div>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default OrderReview;