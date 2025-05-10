'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary py-4 px-6 shadow-md text-light">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Avatar className="size-14 border-2 border-white">
              <AvatarImage src="/images/profile-picture.webp" alt="Nicolas Guigay" width={40} height={40} />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
            <p className="ml-3 text-xs text-light max-w-[150px]">
              Little description fqheozbjqbjzbgieuzbjeiuzb gezhjsbjgkjhfjhgf g
            </p>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="#about"
            className="relative group"
          >
            <>
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
            </>
          </Link>
          <Link
            href="#projects"
            className="relative group"
          >
            <>
              Projects
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
            </>
          </Link>
          <Link
            href="#contact"
            className="relative group"
          >
            <>
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
            </>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className=""
          >
            {mobileMenuOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-xl">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden pt-4 pb-2 px-4 bg-gray-100">
          <ul className="space-y-2">
            <li>
              <Link
                href="/about"
                className="block text-gray-800 hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="block text-gray-800 hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block text-gray-800 hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}