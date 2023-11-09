import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemAmount = parseFloat(item.amount);
      const itemQuantity = parseInt(item.quantity);

      if (!isNaN(itemAmount) && !isNaN(itemQuantity)) {
        return total + itemAmount * itemQuantity;
      } else {
        console.warn('Invalid amount or quantity:', item);
        return total;
      }
    }, 0);
  };

  const [quantities, setQuantities] = useState(cart.reduce((acc, item) => {
    acc[item.id] = item.quantity;
    return acc;
  }, {}));

  const handleQuantityChange = (item, newQuantity) => {
    setQuantities({ ...quantities, [item.id]: newQuantity });
    updateQuantity(item, newQuantity);
  };

  const handleRemoveFromCart = (item) => {
    const newQuantities = { ...quantities };
    delete newQuantities[item.id];
    setQuantities(newQuantities);
    removeFromCart(item);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <div>
              <img src={item.image_url} alt={item.name} style={{ width: '80px' }} />
              {item.name} - ${item.amount.toFixed(2)} x

              {/* Editable quantity input field */}
              <input
                type="number"
                value={quantities[item.id]}
                onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
              />
            </div>
            <button className="button-remove" onClick={() => handleRemoveFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div className="subtotal">
        <p className="title">Total</p>
        <p className="subtotal-price">
          <span className="cart-original-total money">
            ${calculateTotal().toFixed(2)}
          </span>
        </p>
      </div>
      <button className='checkout-btn'> PROCEED TO CHECKOUT</button>
    </div>
  );
};

export default Cart;
