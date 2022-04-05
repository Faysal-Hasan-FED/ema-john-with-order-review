import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [matchedProducts, setMatchedProduct] = useState([]);
    const [cart,setCart] = useState([]);

    // displaying all the products in the ui
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {setProducts(data);
            setMatchedProduct(data)
        });
    },[]);

    // handle search functionality
    const handleSearch = e =>{
        const searchText = e.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setMatchedProduct(matchedProduct);
    }

    // lift up the state
    const handleAddToCart = product =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }
    
    return (
        <div>
            <div className="search">
                <input onChange={handleSearch} type="text" placeholder='Search your product' />
            </div>
        <div className='shop-container'>
            <div className='products-container'>
                {
                    matchedProducts.map(product => <Product
                        handleAddToCart = {handleAddToCart}
                        key={product.key}
                        product={product}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>

        </div>
    );
};

export default Shop;