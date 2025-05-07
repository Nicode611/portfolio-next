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
    <div className="container">
      <header>
        <nav>
          <ul>
            <li className="profile-infos">
              <div className="profile-picture"></div>
              <div>
                <h1 className="name">NICOLAS GUIGAY</h1>
                <h2 className="job">DEVELOPPEUR</h2>
              </div>
            </li>
            <li className="contact-section">
              <a href="mailto:nicolas.guigay.ng@gmail.com?subject=Contact portfolio" className="contact-btn">CONTACT</a>
              <div className="hamburger-section">
                <div className={`hamburger-btn ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
                  <div className="burger-box-1"></div>
                  <div className="burger-box-2"></div>
                  <div className="burger-box-3"></div>
                </div>
                <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                  <ul>
                    <li onClick={() => handleProject('voisins')}>HELLO VOISINS</li>
                    <li onClick={() => handleProject('garage')}>GARAGE V. PARROT</li>
                    <li onClick={() => handleProject('mb')}>MINUTE BEAUTE</li>
                    <li onClick={() => handleProject('sellerie')}>EM SELLERIE</li>
                  </ul>
                </nav>
                <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(false)}></div>
              </div>
              <div className="contact-background"></div>
            </li>
          </ul>
        </nav>
      </header>
      <main className="h-full">
        <section className="infos-section">
          <section className="profile-description">
            <p className='text-sm'>
              Je suis actuellement à la recherche d&apos;une <span className="bold">alternance</span> en développement informatique pour poursuivre mes études en tant que concepteur développeur d&apos;applications <span className="bold">(Bac+3)</span>.<br />
            </p>
            <div className="mail-phone-section">
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
          <section className="projects">
            <h2>MES PROJETS :</h2>
            <ul className="projects-list">
              <li onClick={() => handleProject('voisins')}><Image src="/images/logo-voisins.webp" alt="Logo de Hello voisins" width={40} height={40} /><span>HELLO VOISINS</span></li>
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
        <section className="project md:mt-20">
          <div className="project-img-container">
            <Image
              src={projects[currentProject].img}
              alt=""
              width={800}
              height={800}
              className="project-img"
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h3 className={`project-name ${showContent ? 'active' : ''}`}>{projects[currentProject].name}</h3>
          <p className={`project-description text-md ${showContent ? 'active' : ''}`} dangerouslySetInnerHTML={{ __html: projects[currentProject].desc }}></p>
          <a href={projects[currentProject].link} className={`see-project-btn ${showContent ? 'active' : ''}`} target="_blank" rel="noopener noreferrer">Voir le projet</a>
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
