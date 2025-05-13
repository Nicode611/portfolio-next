"use client";
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

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
          <div className="absolute inset-0 flex">
            <div
              className={`bg-[#064E6A] w-1/2 h-full transform transition-transform duration-1000 ${
                split ? '-translate-x-full' : 'translate-x-0'
              }`}
            />
            <div
              className={`bg-[#064E6A] w-1/2 h-full transform transition-transform duration-1000 ${
                split ? 'translate-x-full' : 'translate-x-0'
              }`}
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
              <button
                className="bg-white text-[#064E6A] text-[1.2rem] px-4 py-2 rounded"
                onClick={() => setLanguageChosen(true)}
              >
                Français
              </button>
              <button
                className="bg-white text-[#064E6A] text-[1.2rem] px-4 py-2 rounded"
                onClick={() => setLanguageChosen(true)}
              >
                English
              </button>
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