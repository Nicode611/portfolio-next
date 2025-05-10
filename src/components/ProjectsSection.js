'use client';

import Link from 'next/link';
import ProjectCard from './ProjectCard';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProject } from '@/redux/selectedProjectSlice';

import projectsList from '@/infos/projectsList';

export default function ProjectsSection() {
    const dispatch = useDispatch();
    const selectedProject = useSelector(
        (state) => state.selectedProject
      );

    const handleClick = (project) => {
        dispatch(setSelectedProject(project));
    };

  return (
    <section id="projects" className="relative section min-h-screen md:h-screen flex justify-center py-24 md:py-0 px-14 z-50">
      {/* Decorative geometric shapes */}
      <div className="mx-auto w-full h-[70%]">
        <h2 className="text-4xl font-bold mb-16 mt-5">Projects</h2>
        
        <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-12 w-full h-full justify-around">

          {/* Main project showcase */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-6 w-full h-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center h-[30%] w-full">
                <div className='bg-gray-200 rounded-md aspect-video w-full h-full'></div>
                <div className='bg-gray-200 rounded-md aspect-video w-full h-full'></div>
                <div className='bg-gray-200 rounded-md aspect-video w-full h-full'></div>
            </div>
            <div className="flex flex-col items-center mt-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-600 text-center">
                A brief description of the featured project goes here.
              </p>
            </div>
          </div>
          
          {/* Sidebar projects */}
          <div className="space-y-6">
            {projectsList.map((project, index) => (
              <div key={index} onClick={()=>{handleClick(project)}} className="bg-gray-200 h-24 rounded-md">
                <span className="">{project.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}