import React from "react";
import TableLine from "../TableLine/TableLine";
import { useCartContext } from "../../context/CartContext";
import './TableCart.css'


const TableCart = ({products}) => {
    const {totalProducts, totalPrice, cart} = useCartContext();

    return (
        <div className="main-container">
            <table className="table-cart">
                <thead>
                    <th className="table-title">
                        Cant.
                    </th>
                    <th className="table-title">
                        Producto
                    </th>
                    <th className="table-title">
                        Precio
                    </th>
                </thead>
                <tbody className="table-body">
                    {
                    cart.map(product => <TableLine key={product.id} product={product} />)
                    }
                </tbody>
                <tfoot className="table-footer">
                    <th>
                        Productos: {totalProducts()}
                    </th>
                    <th>
                        Precio total: ${totalPrice()}
                    </th>
                </tfoot>
            </table>
    </div>
    )
}

export default TableCart;