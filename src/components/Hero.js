'use client';
import { useEffect } from 'react';
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
            <div className='flex flex-col items-end w-3/6'>
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
            <div className='flex justify-center w-3/6'>
              <Image
                src="/images/profile-picture.webp"
                alt="Nicolas Guigay"
                width={200}
                height={200}
                className="rounded-full shadow-lg object-cover w-[250px]  h-auto"
              />
            </div>
        </div>

        

        <div className="flex flex-col h-[30%] mt-16 md:mt-0 z-20">
            <h2 className="text-2xl text-center md:text-left m-0 md:text-2xl font-bold mb-3 ml-3 col-span-3 bg-primary px-3 py-1 text-white rounded-lg w-fit mx-auto ">
                My Projects
            </h2>
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