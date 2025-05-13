'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (section) => {
      const selectedSection = document.getElementById(section);
      if (selectedSection) {
        selectedSection.scrollIntoView({ behavior: 'smooth' });
      }
    }

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
              <span>Nicolas GUIGAY</span><br/>
              Web developper
            </p>
          </Link>
          <div className='flex items-center ml-5 space-x-3'>
            <Link href="https://github.com/Nicode611">
              <FontAwesomeIcon size='2xl' icon={faGithub} style={{ color: '#ffffff' }} />
            </Link>
            <Link href="https://www.linkedin.com/in/nicolas-guigay-4b9900221">
              <FontAwesomeIcon size="2xl" icon={faLinkedin} style={{ color: '#ffffff' }} />
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <span
            className="hover:cursor-pointer relative group"
            onClick={() => handleClick('about')}
          >
            <>
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
            </>
          </span>
          <span
            className="hover:cursor-pointer relative group"
            onClick={() => handleClick('projects')}
          >
            <>
              Projects
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
            </>
          </span>
          <span
            className="hover:cursor-pointer relative group"
            onClick={() => handleClick('contact')}
          >
            <>
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
            </>
          </span>
         <div className='flex space-x-3'>
            <Avatar className="size-8 border-2 border-white hover: cursor-pointer">
              <AvatarImage src="/images/fr-flag.png" alt="French" width={20} height={20} />
              <AvatarFallback>Fr</AvatarFallback>
            </Avatar>
            <Avatar className="size-8 border-2 border-white hover: cursor-pointer">
              <AvatarImage src="/images/en-flg.webp" alt="English" width={20} height={20} />
              <AvatarFallback>En</AvatarFallback>
            </Avatar>
         </div>
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