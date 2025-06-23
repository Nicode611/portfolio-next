'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function ImageGalleryModal({ images, isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset index when modal opens
  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(0);
    }
  }, [isOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
        case 'ArrowRight':
          goToNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, onClose]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  if (!isOpen || !images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
          aria-label="Fermer la galerie"
        >
          <FontAwesomeIcon icon={faTimes} size="2x" />
        </button>

        {/* Main image container */}
        <div className="relative w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
              aria-label="Image précédente"
            >
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </button>
          )}

          {/* Current image */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-full max-h-full"
          >
            <Image
              src={images[currentIndex]?.src}
              alt={images[currentIndex]?.name || `Image ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              priority
            />
          </motion.div>

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors bg-black bg-opacity-50 rounded-full p-3"
              aria-label="Image suivante"
            >
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </button>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </div>

        {/* Thumbnail navigation */}
        {images.length > 1 && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2 max-w-full overflow-x-auto p-2" onClick={(e) => e.stopPropagation()}>
            {images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToImage(index);
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex 
                    ? 'border-white scale-110' 
                    : 'border-transparent hover:border-gray-400'
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.name || `Thumbnail ${index + 1}`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
} 