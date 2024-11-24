
import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Cart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);

  const handleRemoveItem = (itemId) => {
    Inertia.post('/cart/remove', { itemId });
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.price} $
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => Inertia.get('/checkout')}>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
