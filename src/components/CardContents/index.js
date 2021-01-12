import React from ' react';
import CartContext from 'context/CartContext';
import {CartItem} from './styles';
export function CartContext() {
    const {checkout} = React.useContext(CartContext);

    return (
  <section>
      <h1>
          Your cart
      </h1>
      {checkout?checkout.lineItems?checkout.map(item => (
          <CartItem key={item.variant.id}>
              <div>
                  {item.title}
              </div>
              <div>
                  {item.variant.title}
              </div>
              <div>
                  ${item.variant.price}
              </div>
              <div>
                  {item.quantity}
              </div>
              <div>
                  {(item.quantity * item.variant.price).toFixed(2)}
              </div>
          </CartItem>
      ))}
  </section>
  )
};