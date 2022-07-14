import React from "react";
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import { useContext } from 'react'
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {qtyProducts} = useCartContext();
    return (
        <div> 
            <Link to="/cart" className="cart-btn"><ShoppingCartIcon/></Link>
            <p className="cart-cantidad">{qtyProducts}</p>
        </div>
    );
};

export default CartWidget;