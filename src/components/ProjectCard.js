'use client';

import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedProject } from '../redux/selectedProjectSlice';

export default function ProjectCard({ project }) {
	const dispatch = useDispatch();
  const selectedProject = useSelector(
    (state) => state.selectedProject
  );

  const imagesArray = project?.image;
  const cardImage = Array.isArray(imagesArray)
    ? imagesArray[0]?.src
    : imagesArray;
  const cardTitle = project?.title;
  const cardCatchline = project?.catchline;

  const handleClick = (project) => {
    dispatch(setSelectedProject(project));
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
		
    <div
      className="bg-gray-200 h-[200px] md:h-full w-full md:max-w-[350px] aspect-square rounded-md overflow-hidden relative transform transition-transform duration-300 ease-in-out hover:scale-105 hover:cursor-pointer shadow-lg"
      onClick={() => handleClick(project)}
    >
			
      <div className="absolute inset-0 bg-gray-300">
				<Image
					src={cardImage}
					alt={cardTitle}
          fill
          objectFit='cover'
          objectPosition='top center'
					className="object-cover w-full h-full"
				/>
	    </div>
      <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 px-4 pb-[16px] pt-[12px]">
        <h3 className="text-md font-semibold text-gray-800">{cardTitle}</h3>
        <p className="text-xs md:text-xs text-gray-600">{cardCatchline}</p>
        <div className="flex space-x-2 mt-2">
          {project.technos.map((techno, index) => (
            <div key={index} className='flex items-center bg-primaryLight/70 px-1 pt-[2px] pb-[1px] space-x-1 rounded'>
              <Image
                src={techno.icon}
                alt={techno.name}
                width={15}
                height={15}
              />
              <span className="text-xs text-light whitespace-nowrap truncate" title={techno.name} >{techno.name}</span>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}