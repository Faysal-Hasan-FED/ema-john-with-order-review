import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    // get addedproducts from the db and show in the cart
    useEffect(()=>{
        if(products.length){
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart){
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct){
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    },[products]);

    // handle search functionality
    const handleSearch = e =>{
        const searchText = e.target.value;
        const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setMatchedProduct(matchedProduct);
    }

    // lift up the state
    const handleAddToCart = product =>{
        if(!product.quantity){
            product.quantity = 1;
        }
        const newCart = [...cart,product];
        setCart(newCart);
        addToDb(product.key);
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