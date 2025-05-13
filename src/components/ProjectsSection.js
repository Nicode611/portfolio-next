'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Link from 'next/link';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedProject } from '@/redux/selectedProjectSlice';
import { setSelectedFeature } from '@/redux/selectedFeatureSlice';
import FeatureModal from './FeatureModal';
import projectsListFr from '@/infos/projectsListFr';
import projectsListEn from '@/infos/projectsListEn';
import { IoTriangleSharp } from "react-icons/io5";
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ProjectsSection() {

    // Redux state
    const dispatch = useDispatch();
    const selectedProject = useSelector(
      (state) => state.selectedProject
    );
    const selectedFeature = useSelector(
      (state) => state.selectedFeature
    );
    const lang = useSelector((state) => state.selectedLanguage.language);

    // React State
    const [modal, setModal] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [offset, setOffset] = useState(-1500);

    useEffect(() => {
      const handleScroll = () => {
        const section = document.getElementById('projects');
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
        setOffset(-200 * (1 - progress));
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClickFeature = (feature) => {
      dispatch(setSelectedFeature(feature));
      setModal(true);
    };

    const imagesArray = selectedProject?.image;

    useEffect(() => {
      // Retrigger fade-in whenever the selected project or its images change
      if (imagesArray && imagesArray.length > 0) {
        setLoaded(false);
        const timer = setTimeout(() => setLoaded(true), 50);
        return () => clearTimeout(timer);
      }
    }, [imagesArray, selectedProject.title]);

    const handleClick = (project) => {
        dispatch(setSelectedProject(project));
    };

  return (
    

    <section id="projects" className="overflow-hidden relative section min-h-screen flex justify-center py-24 md:py-0 px-14 inner-shadow">
      <IoTriangleSharp
        size={1200}
        className="blur absolute -top-[645px] -left-[116px] text-[#0000005d] text-6xl z-0 rotate-90"
        style={{ transform: `translateY(${offset}px) rotate(90deg)` }}
      />
      <IoTriangleSharp
        size={1200}
        className="absolute -top-[650px] -left-[113px] text-[#1d576f] text-6xl z-0 rotate-90"
        style={{ transform: `translateY(${offset}px) rotate(90deg)` }}
      />
      {/* Decorative geometric shapes */}
        <div className="mx-auto w-full h-[70%] py-16">
          <div className="absolute inset-0 bg-gray-200 z-[-1]" />
          
            {/* <h2 className="relative text-4xl text-primaryDark font-bold mb-6 z-10">Projects</h2> */}
          
          <div className="flex flex-col md:flex-row gap-y-12 md:gap-y-0 md:gap-x-12 w-full h-full justify-around z-50">
  
            {/* Main project showcase */}
              {/* Mettre animation d'apparition */}
              {imagesArray ?
              	<motion.div
                  key={selectedProject.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative rounded-md flex flex-col items-center bg-gray-100 shadow-md md:w-[65%] lg:w-[75%] max-w-[950px] h-full overflow-hidden z-50"
                >
                    
                    <div className='bg-gray-200 rounded-lg aspect-video w-full h-[200px] max-h-[200px] relative'>
                        <Link href={imagesArray[0]?.src}>
                          <Image
                            src={imagesArray[0]?.src}
                            alt={imagesArray[0]?.name}
                            fill
                            objectFit='cover'
                            objectPosition='top center'
                            className='rounded-md'
                          />
                          <div className='absolute inset-0 bg-gray-600 opacity-0 hover:opacity-50 transition-opacity duration-300 ease-in-out' >
                            <div className='absolute inset-0 flex items-center justify-center'>
                              <span className='text-light/100 text-2xl font-bold'>Voir le projet</span>
                            </div>
                          </div>
                        </Link>
                        <div className='linear-gradient absolute left-0 right-0 bottom-0 h-[50px] bg-gradient-to-t from-[#F3F4F6] to-transparent'></div>
                    </div>
  		            <div className="flex flex-col w-full space-y-4 mt-6 pt-3 p-6">
  		              <h3 className="text-[3rem] text-left font-semibold mb-2 ml-5 text-primaryDark">{selectedProject.title}</h3>
  		              <p className="text-gray-500 text-left md:text-center text-sm md:text-md pb-5">
  		                {selectedProject.description}
  		              </p>

                    {/* Features */}
                    <div className="border-t-2 border-primary/50 w-[30%] mb-2" />
                    <h4 className="text-left text-lg font-bold mt-2">
                      {lang === 'fr' ? "Fonctionnalités principales :" : "Highlighted features :"}
                    </h4>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 pb-4'>
                      {selectedProject.highlightFeatures.map((feature, index) => (
                        <div key={index} className="relative h-8 md:h-14 overflow-hidden group hover:cursor-pointer rounded-md"  onClick={() => { handleClickFeature(feature) }}>
                          <div className="absolute inset-0 flex items-center bg-gray-300 shadow-inner justify-center rounded-md z-0">
                            <span>{feature.catchLine}</span>
                          </div>
                          <div
                            className="absolute inset-0 flex flex-col justify-center items-center bg-primaryLight text-light p-1 rounded-md z-20 transition-all duration-500 ease-in-out group-hover:-translate-x-[260px] group-hover:border-r-2 group-hover:border-[#444]"
                          >
                            <span className="text-[0.8rem] md:text-sm whitespace-nowrap">{feature.title}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    {modal && (
                      <FeatureModal
                        feature={selectedFeature}
                        onClose={() => setModal(false)}
                      />
                    )}

                    {/* Stack */}
                    <div className="border-t-2 border-primary/50 w-[30%] mb-2" />
                    <div className="flex flex-wrap justify-between gap-4">
                      <div className='' >
                        <h4 className='text-left text-lg font-bold'>
                          {lang === 'fr' ? "Stack Technique :" : "Technical Stack :"}
                        </h4>
                        <div className='flex flex-wrap items-center space-x-2 mt-4'>
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
                        {selectedProject.file ? (
                          <a href={selectedProject.file} download>
                            <button className='text-sm px-3 py-1 whitespace-nowrap border-[2px] border-primary rounded-sm hover:bg-primary hover:text-light transition-all duration-300 ease-in-out'>
                              {lang === 'fr' ? "Télécharger le dossier projet" : "Download project file"}
                            </button>
                          </a>
                        ) : null}
                        
                        {Array.isArray(selectedProject.link) ? (
                          selectedProject.link.map((link, index) => (
                            <Link href={link.src} key={index}>
                              <button className='text-sm px-3 py-1 text-light whitespace-nowrap border-[2px] border-primary bg-primary rounded-sm hover:bg-primaryLight hover:border-primaryLight transition-all duration-300 ease-in-out'>
                                {link.name}
                              </button>
                            </Link>
                          ))
                        ) : selectedProject.link ? (
                          <Link href={selectedProject.link}>
                            <button className='text-sm px-3 py-1 text-light whitespace-nowrap border-[2px] border-primary bg-primary rounded-sm hover:bg-primaryLight hover:border-primaryLight transition-all duration-300 ease-in-out'>
                              <FontAwesomeIcon size='lg' icon={faGithub} style={{ color: '#ffffff', paddingRight: '5px' }} />
                              {lang === 'fr' ? "Lien du projet" : "Project link"}
                            </button>
                          </Link>
                        ) : null}
                      </div>
                    </div>
  
                    
  		            </div>
              	</motion.div>
              : ""}
            
            {/* Sidebar projects */}
            <div className="grid grid-cols-2 gap-6 md:flex md:flex-col md:justify-center md:space-y-6 md:w-[35%] lg:w-[25%]  p-4 rounded-sm ">
              {lang === 'fr' ? (
                projectsListFr.map((project, index) => {
                  const activeProject = selectedProject === project;
                  return (
                  <div
                    key={index}
                    onClick={() => { handleClick(project) }}
                    className={`relative flex flex-col items-center group hover:cursor-pointer shadow-md bg-gray-200 h-24 w-full rounded-sm transform transition-transform duration-300 ease-in-out hover:scale-105 ${activeProject ? 'scale-105' : ''} `}
                  >
                    <Image
                      src={project.image[0]?.src}
                      alt={project.image[0]?.name}
                      fill
                      objectFit='cover'
                      objectPosition='top center'
                      className='rounded-md'
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-2 rounded-b-md transition-colors duration-300 ease-in-out ${activeProject ? 'bg-[#508aa1df] text-light' : 'bg-white text-dark'} group-hover:bg-[#508aa1df] group-hover:text-light`}
                    >
                      <span className="z-20 ">{project.title}</span>
                    </div>
                    <div className="hidden md:block absolute right-[50%] -bottom-[13px] translate-x-[50%] h-[2px] w-[10%] border-b-[1px] border-black/50" />
                  </div>
                  );
                })
              ) : (
                projectsListEn.map((project, index) => {
                  const activeProject = selectedProject === project;
                  return (
                  <div
                    key={index}
                    onClick={() => { handleClick(project) }}
                    className={`relative flex flex-col items-center group hover:cursor-pointer shadow-md bg-gray-200 h-24 w-full rounded-sm transform transition-transform duration-300 ease-in-out hover:scale-105 ${activeProject ? 'scale-105' : ''} `}
                  >
                    <Image
                      src={project.image[0]?.src}
                      alt={project.image[0]?.name}
                      fill
                      objectFit='cover'
                      objectPosition='top center'
                      className='rounded-md'
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-2 rounded-b-md transition-colors duration-300 ease-in-out ${activeProject ? 'bg-[#508aa1df] text-light' : 'bg-white text-dark'} group-hover:bg-[#508aa1df] group-hover:text-light`}
                    >
                      <span className="z-20 ">{project.title}</span>
                    </div>
                    <div className="absolute right-[50%] -bottom-[13px] translate-x-[50%] h-[2px] w-[10%] border-b-[1px] border-black/50" />
                  </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
    </section>
  );
}