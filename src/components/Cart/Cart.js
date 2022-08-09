import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { addDoc, collection, getFirestore} from 'firebase/firestore';
import { Link } from 'react-router-dom';
import ItemCart from '../ItemCart/ItemCart';
import './Cart.css'

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Francisco',
            email: 'francisco@gmail.com',
            phone: '655252525'
        },
        items: cart.map(product=> ({id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
        total: totalPrice()
    }
    const handleClick = () => {
        const db = getFirestore ();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then(({id })=> console.log(id))
    }


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
                <Link to="/" ><button >Ver más productos</button></Link>
                <Link to="/checkout"><button className='gen-btn' >Finalizar compra</button></Link>
            </div>
        </div>
    )
};

export default Cart;