import "./ItemCount.css";
import React,{useEffect, useState} from 'react';

export const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));
    const decrease = () => {
        setCount(count - 1 ) ;
    }
    const increase = () => {
        setCount(count + 1);
    }
    useEffect(() =>{
        setCount (parseInt(initial));
    }, [initial])
    return (
        <div className="counter">
                <h3>Producto</h3>
                <p>Precio</p>
                <button className="min-btn" onClick={decrease} disabled={count <= 1}>-</button>
                <span>{count}</span>
                <button className="add-btn" onClick={increase} disabled={count >= stock}>+</button>
                <div>
                    <button className="addcart-btn" disabled={stock <= 0} onClick={() => onAdd(count)}>Agregar al carrito</button>
                </div>
        </div>
    )
}

export default ItemCount;