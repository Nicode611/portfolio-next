"use client";
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Home() {

  const [showOverlay, setShowOverlay] = useState(true);
  const [showText, setShowText] = useState(false);
  const [split, setSplit] = useState(false);
  const [languageChosen, setLanguageChosen] = useState(false);

  useEffect(() => {
    const textTimer = setTimeout(() => setShowText(true), 200);
    return () => {
      clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    if (!languageChosen) return;
    // start split animation 500ms after choice
    setShowText(false);
    const splitTimer = setTimeout(() => {
      setSplit(true);
    }, 500);
    // remove overlay 1500ms after choice (500ms + 1000ms)
    const removeTimer = setTimeout(() => setShowOverlay(false), 1500);
    return () => {
      clearTimeout(splitTimer);
      clearTimeout(removeTimer);
    };
  }, [languageChosen]);

  return (
    <>
      {showOverlay && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            {/* Delayed upper-left white triangle */}
            <div
              className="absolute -inset-px transform transition-transform duration-1000 delay-200"
              style={{
                backgroundColor: '#F3F4F6',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                transform: split ? 'translate(-100%, -100%)' : 'translate(0, 0)',
              }}
            />
            {/* Upper-left triangle */}
            <div
              className="absolute inset-0 transform transition-transform duration-1000"
              style={{
                backgroundColor: '#064E6A',
                clipPath: 'polygon(0 0, 100% 0, 0 100%)',
                transform: split ? 'translate(-100%, -100%)' : 'translate(0, 0)',
              }}
            />
            {/* Delayed lower-right white triangle */}
            <div
              className="absolute -inset-px transform transition-transform duration-1000 delay-200"
              style={{
                backgroundColor: '#F3F4F6',
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                transform: split ? 'translate(100%, 100%)' : 'translate(0, 0)',
              }}
            />
            {/* Lower-right triangle */}
            <div
              className="absolute inset-0 transform transition-transform duration-1000"
              style={{
                backgroundColor: '#064E6A',
                clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                transform: split ? 'translate(100%, 100%)' : 'translate(0, 0)',
              }}
            />
          </div>
          <div
            className={`absolute inset-0 flex flex-col items-center justify-center text-white text-6xl transition-all duration-700 ease-in-out transform ${
              showText ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}
          >
            <p className='text-[3.5rem] font-bold mb-20'>
              Welcome to my portfolio
            </p>
            <p className='text-[2rem] mb-4'>
              Veuillez selectionner votre langue :
            </p>
            <div className="flex space-x-4 mt-4">
                <Image
                src={"/images/fr-flag.png"}
                alt='french flag'
                width={130}
                height={130}
                onClick={() => setLanguageChosen(true)}
                className='px-4 py-2 rounded hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-200'
                />
              <Image
                src={"/images/en-flg.webp"}
                alt='french flag'
                width={130}
                height={130}
                onClick={() => setLanguageChosen(true)}
                className='px-4 py-2 rounded hover:cursor-pointer hover:scale-105 transition-all ease-in-out duration-200'
                />
            </div>
          </div>
        </div>
      )}
      <div
        className={`transition-transform duration-1000 ease-out origin-center ${
          split ? 'scale-100' : 'scale-75'
        }`}
      >
        <Hero />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
}