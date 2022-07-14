import React, {useContext, useState, useEffect} from 'react';

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);
const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [qtyProducts, setQtyProducts] = useState(0);
    useEffect(() => {
        getQtyCarProducts();
      }, [cart]);
    
      const getQtyCarProducts = () => {
        let qty = 0;
        cart.forEach((cart) => (qty += cart.quantity));
        setQtyProducts(qty);
      };

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

    return (
        <CartContext.Provider value={{
            clearCart, isInCart, removeProduct, addProduct, qtyProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}


export default CartProvider