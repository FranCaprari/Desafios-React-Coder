import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCount from "../ItemCount/ItemCount";
import { getData } from "../../mocks/apiFake";
import ItemList from "../ItemList/ItemList"

const onAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} unidades`)
}

const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getData
        .then((result) => setProductList(result))
        .catch((error)=> console.log(error))
        .finally(() => setLoading(false))
    }, [])
    return (
        <div className="landing"> <span>{greeting}</span>
        <ItemCount initial={1} stock={5} onAdd={onAdd}/>
        {loading ? <img src="https://c.tenor.com/cmI9GdrU9DsAAAAC/popeye-biceps-popeye-the-sailor-man.gif"></img> : <ItemList productList={productList} />}
         </div>
    );
}

export default ItemListContainer;