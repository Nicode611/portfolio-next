'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../redux/selectedLanguageSlice';

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

export default function Header() {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.selectedLanguage.language);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (section) => {
      const selectedSection = document.getElementById(section);
      if (selectedSection) {
        selectedSection.scrollIntoView({ behavior: 'smooth' });
      }
  }

  return (
    <header className="relative overflow-hidden bg-primary py-4 px-6 text-light"
            style={{
              boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.41), 0 4px 8px rgba(0, 0, 0, 0.2)'
            }}>
      
      {/* Rectangles animés au scroll */}
      <div className="absolute inset-0 z-0">
        {/* Rectangle 1 - Bas droite */}
        <div className="absolute h-[10rem] w-[80%] bg-primaryLight bottom-[-9rem] right-[-10rem] z-0"
            style={{
              transform: `translateY(${scrollY * 0.3}px) translateX(${scrollY * 0.15}px)`,
              boxShadow: '-5px -5px 25px rgba(0, 0, 0, 0.14)',
              animation: 'float-header-1 12s ease-in-out infinite'
            }}
        />
        
        {/* Rectangle 2 - Bas gauche */}
        <div className="absolute h-[10rem] w-[60%] bg-[#0d3e53] bottom-[-5rem] left-[-3rem] z-0"
            style={{
              transform: `translateY(${scrollY * -0.25}px) translateX(${scrollY * -0.12}px)`,
              boxShadow: '-3px -3px 30px rgba(0, 0, 0, 0.42)',
              animation: 'float-header-2 15s ease-in-out infinite'
            }}
        />
        
      </div>
      <div className="container mx-auto flex justify-between items-center z-20">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Avatar className="size-14 border-2 border-white">
              <AvatarImage src="/images/profile-picture.webp" alt="Nicolas Guigay" className="object-cover" />
              <AvatarFallback>NG</AvatarFallback>
            </Avatar>
            <p className="ml-3 text-xs text-light max-w-[150px] z-20">
              <span>Nicolas GUIGAY</span><br/>
              Web developper
            </p>
          </Link>
          <div className='flex items-center ml-5 space-x-3 z-20'>
            <Link href="https://github.com/Nicode611">
              <FontAwesomeIcon size='2xl' icon={faGithub} style={{ color: '#ffffff' }} />
            </Link>
            <Link href="https://www.linkedin.com/in/nicolas-guigay-4b9900221">
              <FontAwesomeIcon size="2xl" icon={faLinkedin} style={{ color: '#ffffff' }} />
            </Link>
          </div>
          <Link href='/CV.pdf' target='_blank' rel='noopener noreferrer' className="ml-5 z-20">
            <button className='bg-primaryDark border-[1px] border-white text-white text-sm px-4 py-2 rounded-md hover:bg-primaryLight  transition duration-300 z-20'>
              {lang === 'fr' ? 'Mon CV' : 'My Resume'}
            </button>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <span
            className="hover:cursor-pointer relative group"
            onClick={() => handleClick('about')}
          >
            <>
              {lang === 'fr' ? 'À propos' : 'About'}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
            </>
          </span>
          <span
            className="hover:cursor-pointer relative group"
            onClick={() => handleClick('projects')}
          >
            <>
              {lang === 'fr' ? 'Projets' : 'Projects'}
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
            <Avatar className={`size-8 border-[1px] border-primaryDark hover:cursor-pointer ${lang === 'fr' ? 'border-white' : ''}`} onClick={() => {
              dispatch(setLanguage('fr'));
            }}> 
              <AvatarImage src="/images/fr-flag.png" alt="French" width={20} height={20} />
              <AvatarFallback>Fr</AvatarFallback>
            </Avatar>
            <Avatar className={`size-8 border-[1px] border-primaryDark hover:cursor-pointer ${lang === 'en' ? 'border-white' : ''}`} onClick={() => {
              dispatch(setLanguage('en'));
            }}>
              <AvatarImage src="/images/en-flg.webp" alt="English" width={20} height={20} />
              <AvatarFallback>En</AvatarFallback>
            </Avatar>
         </div>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative w-10 h-10 flex justify-center items-center focus:outline-none"
            aria-label="Menu"
          >
            <div className="relative flex flex-col items-center justify-center">
              <span 
                className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 ease-out ${mobileMenuOpen ? 'transform rotate-[20deg] translate-y-1.5' : '-translate-y-1'}`}
              />
              <span 
                className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 ease-out ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              <span 
                className={`block h-0.5 w-6 bg-white rounded-sm transition-all duration-300 ease-out ${mobileMenuOpen ? 'transform -rotate-[20deg] -translate-y-1.5' : 'translate-y-1'}`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav 
        className={`md:hidden fixed top-0 right-0 bottom-0 w-full max-w-[300px] bg-primary shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col justify-between pt-20 pb-6 px-6">
          <ul className="space-y-6">
            <li>
              <span
                className="flex items-center text-light text-lg font-medium hover:text-gray-200 transition-colors cursor-pointer"
                onClick={() => {
                  handleClick('about');
                  setMobileMenuOpen(false);
                }}
              >
                <span className="relative">
                  {lang === 'fr' ? 'À propos' : 'About'}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </span>
            </li>
            <li>
              <span
                className="flex items-center text-light text-lg font-medium hover:text-gray-200 transition-colors cursor-pointer"
                onClick={() => {
                  handleClick('projects');
                  setMobileMenuOpen(false);
                }}
              >
                <span className="relative">
                  {lang === 'fr' ? 'Projets' : 'Projects'}
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </span>
            </li>
            <li>
              <span
                className="flex items-center text-light text-lg font-medium hover:text-gray-200 transition-colors cursor-pointer"
                onClick={() => {
                  handleClick('contact');
                  setMobileMenuOpen(false);
                }}
              >
                <span className="relative">
                  Contact
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-light transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </span>
            </li>
          </ul>
          <div>
            <p className="text-light text-sm mb-4">{lang === 'fr' ? 'Changer de langue' : 'Change language'}</p>
            <div className="flex space-x-4">
              <Avatar className={`size-10 border-[1px] border-primaryDark cursor-pointer transition-transform hover:scale-105 ${lang === 'fr' ? 'border-white' : ''}`} onClick={() => {
                dispatch(setLanguage('fr'));
                setMobileMenuOpen(false);
              }}> 
                <AvatarImage src="/images/fr-flag.png" alt="French" width={20} height={20} />
                <AvatarFallback>Fr</AvatarFallback>
              </Avatar>
              <Avatar className={`size-10 border-[1px] border-primaryDark cursor-pointer transition-transform hover:scale-105 ${lang === 'en' ? 'border-white' : ''}`} onClick={() => {
                dispatch(setLanguage('en'));
                setMobileMenuOpen(false);
              }}>
                <AvatarImage src="/images/en-flg.webp" alt="English" width={20} height={20} />
                <AvatarFallback>En</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Overlay when mobile menu is open */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 md:hidden z-30 ${
          mobileMenuOpen ? 'opacity-50 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} 
        onClick={() => setMobileMenuOpen(false)}
      ></div>
    </header>
  );
}