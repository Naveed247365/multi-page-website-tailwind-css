"use client";

import React from 'react';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

const HomeContent = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleShopNow = () => {
    router.push('/EirBuds');
  };

  return (
    <section className='hero h-screen flex items-center bg-cover bg-center' style={{ backgroundImage: "url(hero.webp)"}}>
      <div className='pl-0 md:pl-16 text-center'>
        <h1 className='text-4xl md:text-6xl font-bold drop-shadow-md' data-aos="fade-up">
          Welcome to EirBuds
        </h1>
        <p className='text-2xl mt-4'>
          Discover the perfect headphones <br /> for your music experience.
        </p>
        <button 
          onClick={handleShopNow}
          className='mt-6 text-white px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded-md font-bold transition-colors duration-300'
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HomeContent;