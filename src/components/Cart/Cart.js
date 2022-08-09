import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
    const {cart, totalPrice, clearCart} = useCartContext();



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
            <div className='final'>
                <p className='totalprice'>Total: ${totalPrice()}</p>
                <Link to="/" ><button className='cart-butons'>Ver más productos</button></Link>
                <button onClick={clearCart} className='cart-butons'>Vaciar</button>
                <Link to="/checkout"><button className='gen-btn cart-butons' >Finalizar compra</button></Link>
            </div>
        </div>
    )
};

export default Cart;