"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-10'>
      <h1 className='text-2xl font-bold'>Eir Buds</h1>
      <nav className='hidden md:flex gap-10 text-white font-bold'>
        <Link href="/">Home</Link>
        <Link href="/About">About</Link>
        <Link href="/EirBuds">EirBuds</Link>
        <Link href="/Contact">Contact</Link>
        <FaShoppingCart className='text-white text-xl'/>
      </nav>

      {/* Mobile menu icon */}

      <div className='md:hidden flex items-center'>
        <HiMenuAlt3
          className='text-white text-3xl cursor-pointer'
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile menu */}

      {isMenuOpen && (
        <div className='absolute top-0 left-0 w-full h-screen bg-blue-500 flex flex-col items-center justify-center gap-10'>
          <HiX
            className='text-white text-3xl cursor-pointer'
            onClick={closeMenu}
          />
          <nav className='flex flex-col gap-10 text-white font-bold'>
            <Link href="/">Home</Link>
            <Link href="/About">About</Link>
            <Link href="/EirBuds">EirBuds</Link>
            <Link href="/Contact">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header