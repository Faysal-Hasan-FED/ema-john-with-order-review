import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Review Order</NavLink>
            </nav>
        </div>
    );
};

export default Header;