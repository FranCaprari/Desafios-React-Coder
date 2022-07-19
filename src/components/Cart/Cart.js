import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
    const {cart, totalPrice} = useCartContext();
    if(cart.length === 0){
        return(
            <div className='carritovacio'>
                <p>El carrito esta vacio.</p>
                <Link to="/">Realizar compras</Link>
            </div>
    )};
    return(
        <div>
            <div className='cart'>
                {
                    cart.map(product => <ItemCart key={product.id} product={product} />)
                }
            </div>
            <p className='totalprice'>Total: ${totalPrice()}</p>
        </div>
    )
};

export default Cart;