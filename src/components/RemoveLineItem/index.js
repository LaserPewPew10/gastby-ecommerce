import React from 'react';
import CartContext from 'context/CartContext';
import { FaTrashAlt } from 'react-icons/fa';
import {Icon} from 'styles';
export function RemoveLineItem({lineItemId}) {
const {RemoveLineItem} = React.useContext(CartContext);

const handleClick = () => {
    RemoveLineItem(lineItemId);
}

return (
    <Icon onClick={handleClick}>
        <FaTrashAlt/>
    </Icon>
)
}