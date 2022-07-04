import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"



const Item = ({product}) => {
    const {img, name, description, price, id}= product;
    return (
        <div className={id}>
            <img src={img} alt={name} className="images-card"/>
            <div>
                <h3>{name}</h3>
                <p>${price}</p>
                <p>{description}</p>
            </div>
            <Link to={`/detail/${id}`} className="card-link">Detalles</Link>
            <ItemCount stock={product.stock} initial={1} />
        </div>
    )
}



export default Item