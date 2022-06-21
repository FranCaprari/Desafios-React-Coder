import React from "react";
import "./style.css";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <div>
            <button className="cart-btn"><ShoppingCartIcon/>
            </button>    
        </div>
    );
};

export default CartWidget;