import React from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const handleCheckout = () => {
    // Add your checkout logic here
    alert('Thank you for your purchase! (This is a demo checkout)');
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {/* Cart items will be mapped here */}
      </div>
      <div className="checkout-section">
        <button className="checkout-button" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart; 