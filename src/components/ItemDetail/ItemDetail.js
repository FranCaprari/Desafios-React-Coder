import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";


const ItemDetail = ({product}) => {

    const [buyfinalized, setBuyFinalized] = useState(false);
    const {addProduct} = useCartContext();
    const onAdd = (quantity) => {
        setBuyFinalized(true);
        addProduct(product, quantity);
    }
    const {img, name, description, price, stock} = product;
    return (
        <div className="detail">
            <img src={img} alt={name} className="detail-image"/>
            <div className="detail-text">
                <h1 className="detail-tittle">{name}</h1>
                <p className="detail-price">${price}</p>
                <p className="detail-descrip">{description}</p>
                <div>
          {buyfinalized ? (
            <Link to="/cart">
              <button className="detail-button">Finalizar la Compra</button>
            </Link>
          ) : (
            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
          )}
        </div>
            </div>
    </div>
    );
};



export default ItemDetail