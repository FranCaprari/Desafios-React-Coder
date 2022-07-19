import React from "react";
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <div> 
            <Link to="/cart" className="cart-btn"><ShoppingCartIcon/></Link>
            <span className="cart-cantidad">{totalProducts()|| ''}</span>
        </div>
    );
};

export default CartWidget;