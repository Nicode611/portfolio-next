'use client';

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import { useSelector } from 'react-redux';
import { setLanguage } from '@/redux/selectedLanguageSlice';

export default function ContactSection() {
  const lang = useSelector((state) => state.selectedLanguage.language);
  const [scrollY, setScrollY] = useState(0);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  return (
    <section id="contact" className="overflow-hidden section px-10 bg-primary text-light relative">
      {/* Rectangles animés au scroll */}
      <div className="absolute inset-0 z-0">
                 {/* Rectangle 2 - Bas droite */}
         <div className="absolute h-[70rem] w-[70rem] bg-primaryLight top-[-70rem] md:top-[-60rem] left-[-60rem] md:left-[-60rem] lg:left-[-30rem]  z-0"
             style={{
               transform: `translateY(${scrollY * 0.18}px) translateX(${scrollY * 0.1}px) rotate(50deg)`,
               boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.14)'
             }}
         />
         {/* Rectangle 1 - Haut gauche */}
         <div className="absolute h-[100rem] w-[70rem] bg-[#0d3e53] top-[15rem] md:top-[0px] left-[-40rem] md:left-[-30rem] lg:left-[-200px] z-0"
             style={{
               transform: `translateY(${scrollY * -0.15}px) translateX(${scrollY * -0.08}px) rotate(-45deg)`,
               boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.23)'
             }}
         />
      </div>
      
      <div className="container mx-auto relative z-10">
        
        <div className="flex flex-col items-center md:items-start w-full md:flex-row gap-12">
          <div className='flex flex-col items-center md:items-start w-full md:w-3/5 md:py-16'>
            <div className='pt-10 md:pt-0'>
              <h3 className="text-3xl md:text-[2.5rem] font-bold mb-4">
                {lang === 'fr' ? "Contactez-moi" : "Get in Touch"}
              </h3>
              <p className=" mb-8">
                {lang === 'fr' 
                  ? <>Intéressé(e) par une collaboration ?<br/> Remplissez le formulaire ci-dessous et je vous répondrai dès que possible.</>
                  : <>Interested in working together?<br/> Fill out the form below and I&apos;ll get back to you as soon as I can.</>
                }
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="">nguigay@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full mr-4">
                    <FontAwesomeIcon icon={faWhatsapp} size='xl' className='text-light' />
                  </div>
                  <div>
                    <h4 className="font-bold">{lang === 'fr' ? "Téléphone" : "Phone number"}</h4>
                    <p className="">0627201444</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='w-full md:w-2/5 pb-10 md:py-10'>
            <form
              action="https://formspree.io/f/mzzrkdzo"
              method="POST"
              className="flex flex-col items-center w-full min-w-14 space-y-5 pb-10"
            >
              <input type="hidden" name="_replyto" value={formData.email} />
              <div className='w-[90%]'>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  {lang === 'fr' ? "Nom" : "Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-dark border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div className='w-[90%]'>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-dark border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              
              <div className='w-[90%]'>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 text-dark border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-white text-dark rounded-sm px-4 py-1 active:bg-primaryLight active:text-light focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
              >
                {lang === 'fr' ? 'Envoyer le message' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}