import React from 'react'
import { useSelector } from 'react-redux'
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

export default function FeatureModal({feature, onClose}) {

  return createPortal(
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      tabIndex="-1"
      onClick={onClose}
    className="fixed top-0 left-0 w-screen h-screen bg-black/70 backdrop-blur-lg flex items-center justify-center z-[1000]">
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        id="modal-content"
        role="document"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      
      className=" bg-white/80 p-6 max-w-[80%] md:max-w-[50%] relative rounded">
        <div className='flex items-center justify-between mb-4'>
          <h3 className="text-2xl font-semibold mb-4">
            {feature.title}
          </h3>
          <button
            onClick={onClose}
            className="text-[2.6rem] font-bold"
          >
            ×
          </button>
        </div>
        <p className="text-gray-600">
          {feature.description}
        </p>
      </motion.div>
    </motion.div>,
    document.body
  );
}
