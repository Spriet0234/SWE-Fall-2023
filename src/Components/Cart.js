import React from "react";

function Cart() {
  // This is a static example. In a real-world scenario, you'd fetch cart items from a global state or an API.
  const cartItems = [
    { id: 1, name: "Item 1", price: 20 },
    { id: 2, name: "Item 2", price: 30 },
  ];

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((acc, item) => acc + item.price, 0)}</p>
    </div>
  );
}

export default Cart;
