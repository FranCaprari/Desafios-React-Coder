import React from "react";
import "./CartWidget.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <div> 
            <Link to="/cart" className="cart-btn"><ShoppingCartIcon/></Link>
        </div>
    );
};

export default CartWidget;