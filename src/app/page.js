"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './styles/styles.css';

function App() {
  const [currentProject, setCurrentProject] = useState('voisins');
  const [showContent, setShowContent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = {
    voisins: {
      img: '/images/voisins.webp',
      name: 'HELLO VOISINS',
      desc: `Hello Voisins est le projet de mon examen final de formation.<br><br>Ce projet a représenté un grand défi technique, me permettant de passer par toutes les phases de création d’un projet.<br>L’objectif principal de Hello Voisins est de permettre aux utilisateurs de communiquer entre eux via leur localisation.<br><br>Ce projet est encore en phase de conception, et je prévois de le développer davantage en créant une API REST ainsi qu’une application mobile. Une refonte graphique est également prévue afin d’améliorer l’interface utilisateur et l’expérience globale.`,
      link: 'https://hello-voisins.com'
    },
    garage: {
      img: '/images/gar.webp',
      name: 'GARAGE V. PARROT',
      desc: `Ce projet a été réalisé dans le cadre de ma formation et constitue mon projet d’examen en cours de formation.<br><br> L’objectif de cet examen était de créer un site web pour M. V. Parrot, garagiste à Toulouse. Le site permet à M. Parrot de mettre en exposition ses véhicules d’occasion, d’ajouter les services proposés par son garage, ainsi que de gérer diverses autres fonctionnalités via un panneau de contrôle. <br>Les employés du garage disposent également d’un accès à un panneau de contrôle, mais avec des fonctionnalités restreintes adaptées à leurs besoins. <br><br>Voici les identifiants de connexion pour les différents types de comptes :<br> ADMIN : -valentin.parrot@gmail.com -admin12!<br> EMPLOYÉ : -employe@gmail.com -employe12!`,
      link: 'http://157.230.143.168/'
    },
    mb: {
      img: '/images/mb.webp',
      name: 'MINUTE BEAUTE',
      desc: `Ce projet a été réalisé dans le cadre d’une mission en freelance.<br><br>Wendy, une coiffeuse récemment établie à son compte, avait besoin d’un site vitrine pour promouvoir son activité.<br><br>Ce projet m’a permis de travailler intensivement sur le design afin de mettre en valeur son activité. J’ai également dû gérer plusieurs aspects techniques tels que l’hébergement, le CMS, les frameworks, le référencement, la sécurité, etc.<br><br>Étant donné qu’il s’agissait d’une mission professionnelle, j’ai dû être extrêmement vigilant sur tous ces points pour garantir un résultat optimal et répondre aux attentes de ma cliente.`,
      link: 'https://minutebeaute.fr/'
    },
    sellerie: {
      img: '/images/emsellerie.webp',
      name: 'EM SELLERIE',
      desc: `Ce projet a été réalisé dans le cadre d’une mission en freelance.<br><br>Marc et Emma, de la société EM Sellerie, souhaitaient un site web pour promouvoir leur activité et présenter leurs réalisations. Étant donné la nature très artisanale et presque artistique de leur domaine, la sellerie, ils voulaient un site qui reflète fidèlement leur univers. Nous avons donc travaillé ensemble sur le design pour qu’il corresponde parfaitement à leur vision.<br><br>La personnalisation du site a été un défi technique majeur. J’ai dû m’adapter et modifier mes méthodes de travail pour répondre aux besoins spécifiques de mes clients.<br>La sécurité a également représenté un défi important, car le site faisait face à de nombreuses attaques. Cela m’a permis de renforcer mes compétences en matière de sécurité web.`,
      link: 'https://em-sellerie.fr/'
    }
  };

  useEffect(() => {
    const loadDefault = () => {
      setShowContent(false);
      setTimeout(() => {
        setCurrentProject('voisins');
        setTimeout(() => setShowContent(true), 100);
      }, 500);
    };
    loadDefault();
  }, []);

  const handleProject = (key) => {
    setShowContent(false);
    setTimeout(() => {
      setCurrentProject(key);
      setTimeout(() => setShowContent(true), 100);
    }, 500);
    setMenuOpen(false);
  };

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.left = `${Math.random() * 120}%`;
      bubble.style.animationDelay = `${Math.random() * 30}s`;
      bubble.style.animationDuration = `${10 + Math.random() * 10}s`;
      bubble.style.width = `${10 + Math.random() * 20}px`;
      bubble.style.height = bubble.style.width;
      document.body.appendChild(bubble);
      const initialBubble = bubble.cloneNode(true);
      initialBubble.style.animationDelay = '0s';
      document.body.appendChild(initialBubble);
    }
  }, []);

  return (
    <div className="min-h-screen min-w-screen bg-primary-900 text-white">
      <header className='pt-2.5'>
        <nav>
          <ul className='flex justify-between'>
            <li className="profile-infos">
              <div className="w-24 h-24 rounded-full bg-cover bg-center" style={{ backgroundImage: 'url(/images/profile-picture.webp)' }}></div>
              <div className="flex flex-col justify-center pl-2.5">
                <h1 className="text-2xl">NICOLAS GUIGAY</h1>
                <h2 className="text-xl">DEVELOPPEUR</h2>
              </div>
            </li>
            <li className="fixed flex items-center w-auto z-1">
              <a
                href="mailto:nicolas.guigay.ng@gmail.com?subject=Contact portfolio"
                className="hidden lg:block fixed top-5 right-[45px] px-[30px] py-[15px] text-[18px] font-bold text-black bg-white rounded-[50px] text-center no-underline cursor-pointer shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-all duration-300 z-[1000]"
              >CONTACT</a>
              <div className="lg:hidden block fixed right-[25px] top-[30px] z-2">
                <div className={`hamburger-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                  <div className="w-[35px] h-[7px] bg-white shadow-[0px_0px_10px_black] m-[5px]"></div>
                  <div className="w-[35px] h-[7px] bg-white shadow-[0px_0px_10px_black] m-[5px]"></div>
                  <div className="w-[35px] h-[7px] bg-white shadow-[0px_0px_10px_black] m-[5px]"></div>
                </div>
                <nav
                  className={`fixed top-0 ${menuOpen ? 'right-0' : '-right-[250px]'} w-[250px] h-screen bg-[#0b3c52d3] backdrop-blur-[10px] transition-right duration-400 px-2.5 clip-path-polygon-0-0-100-0-100-10-100-100-100-100-0-60-0-10 z-[999]`}
                >
                  <ul className="block list-none p-0 m-0">
                    <li
                      onClick={() => handleProject('voisins')}
                      className="py-[15px] border-b border-white text-white hover:cursor-pointer last:border-none"
                    >
                      HELLO VOISINS
                    </li>
                    <li
                      onClick={() => handleProject('garage')}
                      className="py-[15px] border-b border-white text-white hover:cursor-pointer last:border-none"
                    >
                      GARAGE V. PARROT
                    </li>
                    <li
                      onClick={() => handleProject('mb')}
                      className="py-[15px] border-b border-white text-white hover:cursor-pointer last:border-none"
                    >
                      MINUTE BEAUTE
                    </li>
                    <li
                      onClick={() => handleProject('sellerie')}
                      className="py-[15px] border-b border-white text-white hover:cursor-pointer last:border-none"
                    >
                      EM SELLERIE
                    </li>
                  </ul>
                </nav>
                <div
                  className={`${menuOpen ? 'fixed opacity-30 pointer-events-auto' : 'fixed opacity-0 pointer-events-none'} top-0 left-0 w-full h-full bg-black/70 z-[998]`}
                  onClick={() => setMenuOpen(false)}
                ></div>
              </div>
              <div className="fixed bg-[#124E68] h-[300px] w-[300px] shadow-[0px_0px_15px_black] rounded-[5px] rotate-[45deg] right-[-220px] top-[-100px] z-[1] lg:right-[-30px] lg:top-[-200px]"></div>
            </li>
          </ul>
        </nav>
      </header>
      <main className="h-full">
        <section className="px-10 py-10">
          <section>
            <p className='text-sm'>
              Je suis actuellement à la recherche d&apos;une <span className="bold">alternance</span> en développement informatique pour poursuivre mes études en tant que concepteur développeur d&apos;applications <span className="bold">(Bac+3)</span>.<br />
            </p>
            <div className="mt-5">
              <div className="icon-section">
                <Image className="description-ico" src="/images/svg/mail.png" alt="" width={30} height={30} />
                <span>nicolas.guigay.ng@gmail.com</span>
              </div>
              <div className="icon-section">
                <Image className="description-ico" src="/images/svg/phone.png" alt="" width={30} height={30} />
                <span>06.27.20.14.44</span>
              </div>
              <div className="icon-section">
                <Image className="description-ico" src="/images/svg/github.png" alt="" width={30} height={30} />
                <span>Nicode611</span>
              </div>
            </div>
          </section>
          <section className="mt-10">
            <h2 className="text-xl mb-5">MES PROJETS :</h2>
            <ul className="space-y-3">
              <li onClick={() => handleProject('voisins')} className="flex items-center gap-2.5"><Image src="/images/logo-voisins.webp" alt="Logo de Hello voisins" width={40} height={40} /><span>HELLO VOISINS</span></li>
              <div className="projects-interline"></div>
              <li onClick={() => handleProject('garage')}><Image src="/images/logo-garage.webp" alt="Logo de Garage V. Parrot" width={40} height={40} /><span>GARAGE V. PARROT</span></li>
              <div className="projects-interline"></div>
              <li onClick={() => handleProject('mb')}><Image src="/images/logo-mb.jpg" alt="Logo de Minute Beauté" width={40} height={40} /><span>MINUTE BEAUTE</span></li>
              <div className="projects-interline"></div>
              <li onClick={() => handleProject('sellerie')}><Image src="/images/logo-sellerie.png" alt="Logo de EM Sellerie" width={40} height={40} /><span>EM SELLERIE</span></li>
              <div className="projects-interline"></div>
            </ul>
          </section>
        </section>
        <section className="absolute top-0 right-[25vw] flex flex-col items-center w-[55%] h-screen mt-3 z-0 md:mt-5">
          <div className="relative max-w-[446px] h-[35%] overflow-hidden">
            <Image
              src={projects[currentProject].img}
              alt=""
              width={800}
              height={800}
              className="w-full h-full object-cover border border-gray-200"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h3 className={`text-3xl mt-3.75 backdrop-blur-sm ${showContent ? 'active' : ''}`}>{projects[currentProject].name}</h3>
          <p className={`text-justify backdrop-blur-sm ${showContent ? 'active' : ''}`} dangerouslySetInnerHTML={{ __html: projects[currentProject].desc }}></p>
          <a href={projects[currentProject].link} className={`inline-block px-7.5 py-3.75 text-lg font-bold text-white bg-primary-500 rounded-full text-center text-decoration-none cursor-pointer shadow-md transition-all ${showContent ? 'active' : ''}`} target="_blank" rel="noopener noreferrer">Voir le projet</a>
        </section>
        <div className="container">
          <div className="triangle triangle1"></div>
          <div className="triangle triangle2"></div>
          <div className="triangle triangle3"></div>
        </div>
      </main>
    </div>
  );
}

export default App;
