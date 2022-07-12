import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"



const Item = ({product}) => {
    const {img, name, description, price, id}= product;
    return (
        <div className={id} >
            <img src={img} alt={name} className="card-img"/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-price">${price}</p>
                <p className="card-descr">{description}</p>
            </div>
            <Link to={`/detail/${id}`} className="card-link">
                <button className="card-button">Ver más</button>
            </Link>
        </div>
    )
}



export default Item