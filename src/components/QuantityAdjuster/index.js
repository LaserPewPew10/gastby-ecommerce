import React from 'react';
import {QuantityAdjusterWrapper, AdjusterButton} from 'styles';


export function QualityAdujuster({item, onAdjust}) {
    const {quantity} = item;

const handleDecrementQuantity = () => {
    onAdjust({variantId: item.variant.id, quantity: -1});
}

const handleIncrementQuantity = () => {
    onAdjust({variantId: item.variant.id, quantity: 1});
}


    return (
<QualityAdujusterWrapper>
<AdjusterButton onClick={handleDecrementQuantity}>-</AdjusterButton>
<div>{quantity}</div>
<AdjusterButton onClick={handleIncrementQuantity}>+</AdjusterButton>
</QualityAdujusterWrapper>
    );
    
    
}