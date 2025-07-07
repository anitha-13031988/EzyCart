
import React, { useState } from 'react';
import './App.css';

const productsList = [
  { id: 1, name: 'T-shirt', price: 499 },
  { id: 2, name: 'Jeans', price: 999 },
  { id: 3, name: 'Sneakers', price: 1999 },
];

const Product = ({ product, addToCart }) => (
  <div className="product">
    <h2>{product.name}</h2>
    <p>₹{product.price}</p>
    <button onClick={() => addToCart(product)}>Add to Cart</button>
  </div>
);

const Cart = ({ cart }) => (
  <div className="cart">
    <h3>Cart</h3>
    {cart.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
    )}
  </div>
);

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <h1>EzyCart - Simple E-commerce</h1>
      <div className="products">
        {productsList.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cart={cart} />
    </div>
  );
}

export default App;
