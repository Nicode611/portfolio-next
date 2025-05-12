'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16">About me</h2>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
            <div className="relative">
              <div className="text-4xl font-bold mb-6">Hi,</div>
              <h3 className="text-3xl font-bold mb-2">Nicolas Guigay</h3>
              <p className="text-lg mb-6">User Interface Designer</p>
              
              <a href="#contact" className="btn btn-primary inline-flex items-center">
                Hire Me
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
              
              <div className="mt-12">
                <a href="https://dribbble.com/username" className="text-pink-500 text-sm flex items-center mt-4" target="_blank" rel="noopener noreferrer">
                  www.dribbble.com/name
                </a>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="md:absolute inset-0 flex items-center">
              <div className="w-full">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}