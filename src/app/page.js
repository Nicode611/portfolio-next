"use client";
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  const [showOverlay, setShowOverlay] = useState(true);
  const [split, setSplit] = useState(false);

  useEffect(() => {
    // start split animation 500ms after choice
    const splitTimer = setTimeout(() => {
      setSplit(true);
    }, 50);
    
    const removeTimer = setTimeout(() => setShowOverlay(false), 1500);
    return () => {
      clearTimeout(splitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {showOverlay && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Élément diagonal pour couvrir la jonction */}
            <div
              className="absolute left-0 top-0 right-0 bottom-0 transform transition-opacity duration-50"
              style={{
                background: 'linear-gradient(to bottom right, transparent 49%, #064E6A 49.5%, #064E6A 50.5%, transparent 51%)',
                zIndex: 3,
                opacity: split ? 0 : 1,
              }}
            />
            
            {/* Delayed upper-left white triangle */}
            <div
              className="absolute inset-0 transform transition-transform duration-1000 delay-200"
              style={{
                backgroundColor: '#E5E7EB',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                transform: split ? 'translate(-100%, -100%)' : 'translate(0, 0)',
                zIndex: 1
              }}
            />
            {/* Upper-left triangle */}
            <div
              className="absolute inset-[-2px] transform transition-transform duration-1000"
              style={{
                backgroundColor: '#064E6A',
                clipPath: 'polygon(0 0, 100.5% 0, 0 100.5%)',
                transform: split ? 'translate(-100%, -100%)' : 'translate(0, 0)',
                zIndex: 2
              }}
            />
            {/* Delayed lower-right white triangle */}
            <div
              className="absolute inset-0 transform transition-transform duration-1000 delay-200"
              style={{
                backgroundColor: '#E5E7EB',
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                transform: split ? 'translate(100%, 100%)' : 'translate(0, 0)',
                zIndex: 1
              }}
            />
            
            {/* Suppression de la ligne horizontale qui n'est plus nécessaire */}

            {/* Lower-right triangle */}
            <div
              className="absolute inset-[-2px] transform transition-transform duration-1000"
              style={{
                backgroundColor: '#064E6A',
                clipPath: 'polygon(100.5% 0, 100.5% 100.5%, 0 100.5%)',
                transform: split ? 'translate(100%, 100%)' : 'translate(0, 0)',
                zIndex: 2
              }}
            />
          </div>
        </div>
      )}
      <div
        className={`overflow-hidden transition-transform duration-1000 ease-out origin-center ${
          split ? 'translate-y-0 opacity-100' : 'translate-y-[10%] opacity-0'
        }`}
      >
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}