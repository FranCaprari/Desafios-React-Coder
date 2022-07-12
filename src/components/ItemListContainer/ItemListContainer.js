import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import { getProds } from "../../mocks/apiFake";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";



const ItemListContainer = ({greeting}) => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
    useEffect(() => {
        getProds(categoryId)
        .then((result) => setProductList(result))
        .catch((error)=> console.log(error))
        .finally(() => setLoading(false))
    }, [categoryId])
    return (
        <div className="landing"> <span>{greeting}</span>
        {loading ? <SpinnerCircular /> : <ItemList productList={productList} />}
         </div>
    );
}

export default ItemListContainer;