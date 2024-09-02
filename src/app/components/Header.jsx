import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo/Brand Name */}
        <div className="text-white text-2xl font-extrabold tracking-wide">
          <Link href="/" className="hover:text-indigo-500 transition duration-300">
            Vikash Bharal
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">
            About
          </Link>
          <Link href="/movie" className="text-gray-300 hover:text-white transition duration-300">
            Movies
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition duration-300">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
