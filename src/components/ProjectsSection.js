'use client';
import { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProject } from '@/redux/selectedProjectSlice';
import { setSelectedFeature } from '@/redux/selectedFeatureSlice'
import FeatureModal from './FeatureModal';
import projectsList from '@/infos/projectsList';
import { IoTriangleSharp } from "react-icons/io5";

export default function ProjectsSection() {

    // Redux state
    const dispatch = useDispatch();
    const selectedProject = useSelector(
      (state) => state.selectedProject
    );
    const selectedFeature = useSelector(
      (state) => state.selectedFeature
    );



    // React State
    const [modal, setModal] = useState(false)
    const [loaded, setLoaded] = useState(false)

const handleClickFeature = (feature) => {
  dispatch(setSelectedFeature(feature));
  setModal(true);
};

    

		
    const imagesArray = selectedProject?.image;

    useEffect(() => {
      if (imagesArray && imagesArray.length > 0) {
        setLoaded(true);
      }
    }, [imagesArray]);

    const handleClick = (project) => {
        dispatch(setSelectedProject(project));
    };

  return (
    

    <section id="projects" className="relative section min-h-screen flex justify-center py-24 md:py-0 px-14 ">
      <IoTriangleSharp size={1200} className="blur absolute -top-[645px] -left-[135px] text-[#0000005d] text-6xl opacity-100 z-0 rotate-90" />
      <IoTriangleSharp size={1200} className="absolute -top-[650px] -left-[130px] text-[#1d576f] text-6xl opacity-100 z-0 rotate-90" />
      {/* Decorative geometric shapes */}
        <div className="mx-auto w-full h-[70%] pt-10">
          <div className="absolute inset-0 bg-gray-200 z-[-1]" />
          
            <h2 className="relative text-4xl text-light font-bold mb-6 z-10">Projects</h2>
          
          <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-12 w-full h-full justify-around z-50">
  
            {/* Main project showcase */}
            <div className="relative flex flex-col items-center bg-gray-100 shadow-md rounded-lg p-6 md:w-[65%] lg:w-[75%] max-w-[950px] h-full overflow-hidden z-50">
              {/* Mettre animation d'apparition */}
              {imagesArray ?
              	<div className={`flex flex-col w-full h-full transition-opacity duration-500 ease-in-out ${loaded ? 'opacity-100' : 'opacity-0'}`}>
              		<div className="grid grid-cols-2 md:flex gap-8 justify-items-center h-[30%] w-full">
  		                <div className='bg-gray-200 rounded-lg aspect-video w-full h-full relative'>
  		                    <Link href={imagesArray[0]?.src}>
  		                      <Image
    		                      src={imagesArray[0]?.src}
    													alt={imagesArray[0]?.name}
    													fill
    													objectFit='cover'
                              className='rounded-md'
    		                    />
  		                    </Link>
  		                </div>
  		                <div className='bg-gray-200 rounded-lg aspect-video w-full h-full relative'>
  		                    <Link href={imagesArray[1]?.src}>
  		                      <Image
    		                      src={imagesArray[1]?.src}
    													alt={imagesArray[1]?.name}
    													fill
    													objectFit='cover'
                              className='rounded-md'
    		                    />
  		                    </Link>
  		                </div>
  		                <div className='bg-gray-200 rounded-lg aspect-video w-full h-full relative'>
  		                    <Link href={imagesArray[2]?.src}>
  		                      <Image
    		                      src={imagesArray[2]?.src}
    													alt={imagesArray[2]?.name}
    													fill
    													objectFit='cover'
                              className='rounded-md'
    		                    />
  		                    </Link>
  		                </div>
  		            </div>
  		            <div className="flex flex-col space-y-4 mt-6 border-t-2 border-primary/50 pt-3">
  		              <h3 className="text-2xl text-center font-semibold mb-2">{selectedProject.title}</h3>
  		              <p className="text-gray-600 text-center pb-5">
  		                {selectedProject.description}
  		              </p>
  
                    <div className="border-t-2 border-primary/50 w-[30%] mb-2" />
                    <h4 className="text-left text-lg font-bold mt-2">
                      Highlighted features :
                    </h4>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-5 pb-4'>
                      {selectedProject.highlightFeatures.map((feature, index) => (
                        <div key={index} className="relative flex flex-col justify-center items-center hover:cursor-pointer bg-gray-200 h-14 p-1 rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105" onClick={()=>{handleClickFeature(feature)}}>
                          <span className="text-[0.8rem] md:text-sm whitespace-nowrap">{feature.title}</span>
                        </div>
                      ))}
                    </div>
                    {modal && (
                      <FeatureModal
                        feature={selectedFeature}
                        onClose={() => setModal(false)}
                      />
                    )}
  
                    <div className="border-t-2 border-primary/50 w-[30%] mb-2" />
                    <div className="flex flex-wrap justify-between gap-4">
                      <div className='' >
                        <h4 className='text-left text-lg font-bold'>
                          Stack Technique :
                        </h4>
                        <div className='flex items-center space-x-2 mt-4'>
                          {selectedProject.technos.map((techno, index) => (
                          <div key={index} className='flex items-center space-x-2 bg-slate-100/70 px-1 py-0.5 text-[0.7rem] rounded'>
                            <Image
                              src={techno.icon}
                              alt={techno.name}
                              width={16}
                              height={16}
                              className="w-4 h-4"
                              style={{ fill: '#569CD6' }}
                            />
                            <span className='text-sm'>{techno.name}</span>
                          </div>
                          ))}
                        </div>
                      </div>
                      <div className='flex items-end space-x-2 ml-3'>
                        <button className='text-sm px-3 py-1 whitespace-nowrap border-[2px] border-primary rounded-sm hover:bg-primary hover:text-light  transition-all duration-300 ease-in-out'>Lien du projet</button>
                        <button className='text-sm px-3 py-1 whitespace-nowrap border-[2px] border-primary rounded-sm hover:bg-primary hover:text-light  transition-all duration-300 ease-in-out'>Dossier telechargeable</button>
                      </div>
                    </div>
  
                    
  		            </div>
              	</div>
              : ""}
            </div>
            
            {/* Sidebar projects */}
            <div className="space-y-6 md:w-[35%] lg:w-[25%]  p-4 rounded-md ">
              {projectsList.map((project, index) => (
                <div
                  key={index}
                  onClick={() => { handleClick(project) }}
                  className="relative flex flex-col items-center group hover:cursor-pointer shadow-md bg-gray-200 h-24 rounded-md transform transition-transform duration-300 ease-in-out hover:scale-105 "
                >
                  <Image
                    src={project.image[0]?.src}
                    alt={project.image[0]?.name}
                    fill
                    objectFit='cover'
                    className='rounded-md'
                  />
                  {/* mettre animation de transform smooth et link le hover au container */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 p-2 rounded-b-md transition-colors duration-300 ease-in-out group-hover:bg-[#508aa1df] group-hover:text-light">
                    <span className="z-20 ">{project.title}</span>
                  </div>
                  <div className="absolute right-[50%] -bottom-[13px] translate-x-[50%] h-[2px] w-[10%] border-b-[1px] border-black/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
    </section>
  );
}