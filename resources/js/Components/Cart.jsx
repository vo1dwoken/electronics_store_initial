const Cart = ({ cartItems }) => {
  const [items, setItems] = useState(cartItems);

  const handleRemoveItem = (itemId) => {
    Inertia.post('/cart/remove', { itemId }, {
      onSuccess: () => {
        setItems((prevItems) => prevItems.filter(item => item.id !== itemId));
      },
      onError: (errors) => {
        console.error("Error removing item:", errors);
      }
    });
  };

  // Обчислюємо загальну суму
  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {items.length === 0 ? (
          <li>Your cart is empty.</li>
        ) : (
          items.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} $
              <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
          ))
        )}
      </ul>
      <div>
        <p>Total: {totalPrice} $</p>
      </div>
      <button onClick={() => Inertia.get('/checkout')}>Proceed to Checkout</button>
    </div>
  );
};
