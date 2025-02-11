"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaShoppingCart } from 'react-icons/fa'
import { HiMenuAlt3 } from 'react-icons/hi'
import { HiX } from 'react-icons/hi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className='bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-50'>
      <Link href="/" className='text-2xl font-bold hover:text-blue-100'>
        Eir Buds
      </Link>

      {/* Desktop Navigation */}
      <nav className='hidden md:flex gap-10 text-white font-bold items-center'>
        <Link href="/" className='hover:text-blue-100'>Home</Link>
        <Link href="/About" className='hover:text-blue-100'>About</Link>
        <Link href="/EirBuds" className='hover:text-blue-100'>EirBuds</Link>
        <Link href="/Contact" className='hover:text-blue-100'>Contact</Link>
        <Link href="/Cart" className='hover:text-blue-100'>
          <FaShoppingCart className='text-white text-xl'/>
        </Link>
      </nav>

      {/* Mobile menu icon */}
      <div className='md:hidden flex items-center'>
        <button 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className='text-white hover:text-blue-100'
        >
          <HiMenuAlt3 className='text-3xl cursor-pointer' />
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className='fixed inset-0 bg-blue-500 flex flex-col items-center justify-center gap-10 z-50'>
          <button 
            onClick={closeMenu}
            aria-label="Close menu"
            className='absolute top-5 right-10 text-white hover:text-blue-100'
          >
            <HiX className='text-3xl cursor-pointer' />
          </button>
          <nav className='flex flex-col gap-10 text-white font-bold text-center'>
            <Link href="/" className='hover:text-blue-100'>Home</Link>
            <Link href="/About" className='hover:text-blue-100'>About</Link>
            <Link href="/EirBuds" className='hover:text-blue-100'>EirBuds</Link>
            <Link href="/Contact" className='hover:text-blue-100'>Contact</Link>
            <Link href="/Cart" className='hover:text-blue-100'>Cart</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header