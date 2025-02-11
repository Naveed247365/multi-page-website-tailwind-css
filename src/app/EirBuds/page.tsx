'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EirBuds = () => {
  const router = useRouter();
  const [addedToCart, setAddedToCart] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const eirData = [
    {
      id: 1,
      name: 'ronin',
      price: 1000,
      description: 'This is a description',
      image: '/ronin.png'
    },
    {
      id: 2,
      name: 'iphone',
      price: 25000,
      description: 'This is a description',
      image: '/iphone.jpg'
    },
    {
      id: 3,
      name: 'samsung',
      price: 10000,
      description: 'This is a description',
      image: '/samsung.jpg'
    },
    {
      id: 4,
      name: 'best',
      price: 2000,
      description: 'This is a description',
      image: '/best.jpg'
    },
    {
      id: 5,
      name: 'jbl',
      price: 10000,
      description: 'This is a description',
      image: '/jbl.png'
    },
    {
      id: 6,
      name: 'bose',
      price: 10000,
      description: 'This is a description',
      image: '/bose.jpg'
    }
  ]

  const handleAddToCart = (product: any) => {
    setAddedToCart(product.id);
    
    // Get current cart
    const savedCart = localStorage.getItem('cart');
    let currentCart = savedCart ? JSON.parse(savedCart) : [];
    
    // Add new item
    currentCart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      description: product.description,
      quantity: 1
    });
    
    // Save to localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));
    
    // Redirect to cart page after a short delay
    setTimeout(() => {
      setAddedToCart(null);
      router.push('/Cart');
    }, 1000);
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  return (
    <div className='product-list grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
      {eirData.map((eir) => (
        <div key={eir.id} className='product-card bg-white p-5 rounded-md shadow-md text-center flex flex-col'>
          <div className="relative w-full pt-[100%] mb-4">
            <img 
              src={eir.image} 
              alt={eir.name} 
              className={`absolute top-0 left-0 w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-110 ${
                loadedImages.has(eir.id) ? 'loaded' : ''
              }`}
              onLoad={() => handleImageLoad(eir.id)}
            />
          </div>
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className='text-2xl font-bold capitalize'>{eir.name}</h3>
              <p className='mt-2 text-gray-500'>{eir.description}</p>
              <div className='price text-blue-500 text-xl font-semibold mt-2'>
                PKR {eir.price.toLocaleString()}
              </div>
            </div>
            <button 
              onClick={() => handleAddToCart(eir)}
              className={`w-full ${
                addedToCart === eir.id 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-blue-500 hover:bg-blue-700'
              } text-white font-bold py-2 px-4 rounded-md mt-4 transition-colors duration-300`}
            >
              {addedToCart === eir.id ? 'Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EirBuds