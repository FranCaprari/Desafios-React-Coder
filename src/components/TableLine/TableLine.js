import React from 'react';
import './TableLine.css'

const TableLine = ({ product }) =>{
    return (
        <tr>
            <td className='tableItem'>
                {product.quantity}
            </td>
            <td className='tableItem'>
                {product.name}
            </td>
            <td className='tableItem'>
                ${product.price * product.quantity}
            </td>
        </tr>
    )
};


export default TableLine;