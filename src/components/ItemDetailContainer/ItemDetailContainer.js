import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { SpinnerCircular } from 'spinners-react/lib/esm/SpinnerCircular';
import {getFirestore, doc, getDoc} from 'firebase/firestore';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        const queryDoc = doc(db, 'products', id);
        getDoc(queryDoc)
            .then(result => setProduct({id: result.id, ...result.data()}))
            .catch((error) =>{
                console.log(error);
            })
            .finally(() =>{
                setLoading(false)
            });
    }, [id]);

    return (
        <div className="all-details">
            {loading ? (
                <SpinnerCircular />
            ) : (
                <>
                    <ItemDetail product={product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;
