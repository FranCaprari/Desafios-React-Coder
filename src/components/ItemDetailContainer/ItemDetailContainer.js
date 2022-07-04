import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "../ItemDetail/ItemDetail";
import { getProd } from "../../mocks/apiFake"
import { SpinnerCircular } from 'spinners-react/lib/esm/SpinnerCircular';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        getProd(id)
            .then((res) => {
                setProduct(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            }); 
    }, [id]);

    return (
        <div>
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
