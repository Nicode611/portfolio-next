import React from 'react'

import { useSelector } from 'react-redux'

export default function FeatureModal({feature, onClose}) {

  const selectedFeature = useSelector(
    (state) => state.selectedProject
  );

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1000]">
      <div className="w-[70%] h-[70%] bg-white p-6 relative rounded">
        <button
          onClick={onClose}
          className="absolute top-2 right-5 text-[2.6rem] font-bold"
        >
          ×
        </button>
        <h3 className="text-2xl font-semibold mb-4">
          {feature.title}
        </h3>
        <p className="text-gray-600">
          {feature.description}
        </p>
      </div>
    </div>
  )
}
