import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    setIsAdded(true);
    // Add your cart logic here
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="product-card">
      // ... existing code ...
      <button 
        className={`add-to-cart ${isAdded ? 'added' : ''}`}
        onClick={handleAddToCart}
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
}

export default ProductCard; 