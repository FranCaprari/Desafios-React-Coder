import React from "react";
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"


const ItemDetail = ({product}) => {
    const {img, name, description, price} = product;
    return (
        <div className="detail">
            <img src={img} alt={name} className="detail-image"/>
            <div className="detail-text">
                <h1>{name}</h1>
                <p>${price}</p>
                <p>{description}</p>
                <ItemCount stock={product.stock} initial={1} />
            </div>
    </div>
    );
};



export default ItemDetail