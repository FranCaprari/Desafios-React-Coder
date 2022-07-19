import React from 'react'
import './ItemCart.css'
import { useCartContext } from '../../context/CartContext'



const ItemCart = ({product}) => {
    const {removeProduct} = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.img} alt={product.name} className="itemcart-img" />
            <div className='itemcart-text'>
                <p>Producto: {product.name}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio: ${product.price}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button className='itemcart-btn' onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}


export default ItemCart