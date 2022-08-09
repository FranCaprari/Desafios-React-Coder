import React, {useContext, useState} from 'react';
import { useLocalStorage } from '../components/useLocalStorage/useLocalStorage'
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);
const CartProvider = ({children}) => {
    const [cart, setCart] = useLocalStorage("cart", []);

    const addProduct = (item, quantity) =>{
        let newCart;
        let product = cart.find(product => product.id === item.id);
        if(product){
            product.quantity += quantity;
            newCart = [...cart];
        } else{
            product = {...item, quantity: quantity};
            newCart = [...cart, product];
        }
        setCart(newCart);
        console.log(newCart)
    }
    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;

    const removeProduct = (id) => setCart(cart.filter(product => product.id !== id));

    const totalProducts= () => cart.reduce((acumulador, productoActual)=> acumulador + productoActual.quantity, 0);
    
    const totalPrice = () => {
        return cart.reduce((prev, actual) => prev + actual.quantity * actual.price, 0);
    }

    return (
        <CartContext.Provider value={{
            clearCart, isInCart, removeProduct, addProduct, totalPrice, totalProducts, cart
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider