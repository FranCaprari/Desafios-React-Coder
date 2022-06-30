import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./Item.css"


const Item = ({product}) => {
    const {img, name, description, price, id}= product;
    return (
        <div className={id}>
            <img src={img} alt={name} className="images-card"/>
            <div>
                <p>{name}</p>
                <p>{price}</p>
                <p>{description}</p>
            </div>
            <button>Ver mas</button>
            <ItemCount />
        </div>
    )
}



export default Item