import React from "react";
import Item from '../Item/Item';
import "./ItemList.css"


const ItemList = ({productList}) => {
    return (
     <div>
        <h3>BodyBest Suplementos</h3>
        <div className="cards">
            {productList.map((product)=><Item key={product.id} product={product}/>)}
        </div>
     </div>
    )
}

export default ItemList