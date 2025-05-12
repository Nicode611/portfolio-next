'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import projectsList from '@/infos/projectsList';

import { useDispatch } from 'react-redux';
import { setSelectedProject } from '../redux/selectedProjectSlice';

export default function Hero() {
    const dispatch = useDispatch();

    /* useEffect(() => {
        for (let i = 0; i < 10; i++) {
          const bubble = document.createElement('div');
          bubble.classList.add('bubble');
                    bubble.style.left = `${Math.random() * 100}vw`;
          bubble.style.animationDelay = `${Math.random() * 30}s`;
          bubble.style.animationDuration = `${10 + Math.random() * 10}s`;
          bubble.style.width = `${10 + Math.random() * 20}px`;
          bubble.style.height = bubble.style.width;
          document.body.appendChild(bubble);
          const initialBubble = bubble.cloneNode(true);
          initialBubble.style.animationDelay = '0s';
          document.body.appendChild(initialBubble);
        }
      }, []); */

      

  return (
    <section className="min-h-screen md:h-screen flex justify-center bg-white py-24 md:py-0 md:px-14">
      <div className="container mx-auto text-center h-full z-10">
        <div className="flex flex-col items-center justify-center h-[30%]">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Nicolas GUIGAY
            </h1>
            <h2>
                Web developer, designer, and creator of digital experiences
            </h2>
        </div>
        

        <div className="flex flex-col h-[70%] mt-16 md:mt-0">
            <h2 className="text-2xl text-center md:text-left m-0 md:text-3xl font-bold mb-6 col-span-3">
                My Projects
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 h-[70%] w-full justify-items-center">

                {projectsList.map((project) => (
                  <ProjectCard key={project.id} project={project} onClick={() => handleClick(project)} />
                ))}

            </div>
        </div>

      </div>
    </section>
  );
}