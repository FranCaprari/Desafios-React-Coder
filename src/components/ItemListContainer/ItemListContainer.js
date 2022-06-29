import React from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";

const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades`)
}

const itemListContainer = ({greeting}) => {
    return (
        <div className="landing"> <span>{greeting}</span>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
         </div>
    );
}

export default itemListContainer;