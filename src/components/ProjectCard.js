'use client';

import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setSelectedProject } from '../redux/selectedProjectSlice';

export default function ProjectCard({ project }) {
	const dispatch = useDispatch();
  const imagesArray = project?.image;
  const cardImage = Array.isArray(imagesArray)
    ? imagesArray[0]?.src
    : imagesArray;
  const cardTitle = project?.title;
  const cardDescription = project?.description;

  const handleClick = (project) => {
    dispatch(setSelectedProject(project));
    console.log('wanna scroll');
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      console.log('scrolled')
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
		
    <div
      className="bg-gray-200 w-full max-w-[70%] md:max-w-[350px] aspect-square rounded-md overflow-hidden relative transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer"
      onClick={() => handleClick(project)}
    >
			
      <div className="absolute inset-0 bg-gray-300">
				<Image
					src={cardImage}
					alt={cardTitle}
					width={350}
					height={350}
					className="object-cover w-full h-full"
				/>
			</div>
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-4">
        <h3 className="text-lg font-semibold text-gray-800">{cardTitle}</h3>
        <p className="text-sm text-gray-600">{cardDescription}</p>
        <div className="flex space-x-2 mt-2">
          <span className="bg-primaryLight/70 px-2 py-1 text-xs rounded">g/ai</span>
          <span className="bg-primaryLight/70 px-2 py-1 text-xs rounded">g/ai</span>
        </div>
      </div>
    </div>
  );
}