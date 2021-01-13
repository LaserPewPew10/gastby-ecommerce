import React from ' react';
import CartContext from 'context/CartContext';
import {CartItem, CartHeader, CartFooter} from './styles';
import {QuantityAdjuster} from '../QuantityAdjuster';


export function CartContext() {
    const {checkout, updateLineItem} = React.useContext(CartContext);

    const handledAdjustQuantity = ({quantity, variantId}) => {
updateLineItem({quantity, variantId});
    }

    return (
  <section>
      <h1>
          Your cart
      </h1>
      <CartHeader>
          <div> Product </div>
          <div> Unit price </div>
          <div> Quantity </div>
          <div> Amount </div>
      </CartHeader>
      {checkout?checkout.lineItems?checkout.map(item => (
          <CartItem key={item.variant.id}>
              <div>
                  {item.title}
              </div>
              <div>
                  {item.variant.title === 'Default Title' ? '' : item.variant.title}
              </div>
              <div>
                  ${item.variant.price}
              </div>
              <div>
                  <QuantityAdjuster item={item} onAdjust={handledAdjustQuantity}/>
              </div>
              <div>
                  ${(item.quantity * item.variant.price).toFixed(2)}
              </div>
          </CartItem>
      ))}
      <CartFooter>
          <div>
          <strong>Total:</strong>
          </div>
          <div>
              <span>${checkout?.totalPrice}</span>
          </div>
      </CartFooter>
  </section>
  )
};