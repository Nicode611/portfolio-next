'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import projectsList from '@/infos/projectsList';

import { useDispatch } from 'react-redux';
import { setSelectedProject } from '../redux/selectedProjectSlice';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    const dispatch = useDispatch();

    const handleClick = (project) => {
      dispatch(setSelectedProject(project));
    };

    const [showIntro, setShowIntro] = useState(false);
    const [showImage, setShowImage] = useState(false);
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
      
      const timer3s = setTimeout(() => {
        setShowIntro(true);
        setShowImage(true);
      }, 3000);
      
      const timer35s = setTimeout(() => {
        setShowProjects(true);
      }, 3500);
      return () => clearTimeout(timer35s, timer4s);
    }, []);

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
      }, []);  */

      

  return (
    <section id='about' className="relative min-h-screen md:h-screen flex justify-center bg-white py-24 md:pb-24 md:pt-0 md:px-14 z-10 border-b-[1px] border-b-black/10">
      <div className="container mx-auto flex flex-col justify-between h-full z-20">
        <div className="flex items-center justify-around h-[70%]">
            <div
              className={`flex flex-col items-end w-3/6 transition-all duration-700 ease-out transform ${
                showIntro ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <h2 className='text-right text-lg mb-3 text-primaryLight'>
                  Web developer, designer, and creator of digital experiences
              </h2>
              <h1 className="text-[5rem] md:text-7xl text-right text-primaryDark font-bold mb-3">
                Nicolas <br/> GUIGAY
              </h1>
              <div className='relative bg-gray-100 mt-6'>
                <FontAwesomeIcon className='absolute -top-10 -left-10' icon={faQuoteLeft} style={{ fontSize: '60px' }} />
                <FontAwesomeIcon className='absolute -bottom-10 -right-10' icon={faQuoteRight} style={{ fontSize: '60px' }} />
                <p className='text-right  text-gray-500 p-3 max-w-[500px]'>
                  Passionné par le développement web, je conçois des projets <strong>modernes et soignés</strong>, avec le souci du détail et de l’expérience utilisateur. Ce portfolio en est un aperçu.<br/>
                  Avec le souci du détail et de l’expérience utilisateur. Ce <strong>portfolio </strong>en est un aperçu.
                </p>
              </div>
            </div>
            <div
              className={`hidden md:flex justify-center w-3/6 transition-all duration-700 ease-out transform ${
                showImage ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <Image
                src="/images/profile-picture.webp"
                alt="Nicolas Guigay"
                width={200}
                height={200}
                className="rounded-full shadow-lg object-cover w-[250px]  h-auto"
              />
            </div>
        </div>

        

        <div
          className={`flex flex-col h-[30%] mt-16 md:mt-0 z-20 transition-all duration-700 ease-out transform ${
            showProjects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
            <Swiper
              modules={[Navigation, Autoplay]}
              /* navigation */
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              slidesPerView={3}
              centeredSlides={true}
              initialSlide={2}
              spaceBetween={30}
              className="relative w-full z-10 overflow-visible px-8"
            >
              {projectsList.map((project) => (
                <SwiperSlide key={project.id} className="flex justify-center h">
                  <ProjectCard project={project} onClick={() => handleClick(project)} />
                </SwiperSlide>
              ))}
            </Swiper>
        </div>

      </div>
    </section>
  );
}