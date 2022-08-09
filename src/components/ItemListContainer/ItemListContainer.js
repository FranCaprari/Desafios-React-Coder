import React, { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";
import { SpinnerCircular } from "spinners-react";
import { getFirestore, collection, where, query, getDocs } from "firebase/firestore";



const ItemListContainer = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();
    useEffect(() => {
        const db = getFirestore();
        const queryCollection = collection(db, 'products');
        if(categoryId){
            const queryFilter = query(queryCollection, where('category', '==', categoryId))
            getDocs(queryFilter)
                .then(result => setProductList(result.docs.map(product => ({id: product.id, ...product.data()}))))
                .catch((error)=> console.log(error))
                .finally(() => setLoading(false))
        } else{
            getDocs(queryCollection)
            .then(result => setProductList(result.docs.map(product => ({id: product.id, ...product.data()}))))
            .catch((error)=> console.log(error))
            .finally(() => setLoading(false))
        }
    }, [categoryId])
    return (
        <div className="landing"> 
        {loading ? <SpinnerCircular /> : <ItemList productList={productList} />}
         </div>
    );
}

export default ItemListContainer;