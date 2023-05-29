import React, { useState } from 'react';
import Modal from './Modal';
import wookieClicker from '../../assets/portfolio/wookie-clicker.png';
import skillsetDashboard from '../../assets/portfolio/skillset-dashboard.png';
import happyPoo from '../../assets/portfolio/happy-poo.png';
import spotcast from '../../assets/portfolio/spotcast.png';

import html from '../../assets/html.png';
import css from '../../assets/css.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import express from '../../assets/expressjs.png';
import mysql from '../../assets/mysql.png';
import tailwind from '../../assets/tailwind.png';

const Portfolio = () => {
  const [modal, setModal] = useState(null);

  const closeModal = () => {
    setModal(null);
  };

  const portfolios = [
    {
      id: 1,
      title: 'Wookie Clicker',
      description: 'Clicker game',
      src: wookieClicker,
      child: [
        { icon: html, size: 40 },
        { icon: css, size: 40 },
        { icon: javascript, size: 40 },
      ],
      code: 'https://github.com/justroxanne/WCS-Cookie-Clicker',
      demo: 'https://wcs-cookie-clicker.vercel.app/',
      origin:
        'My first team project within the school was to build a cookie clicker game like. We thought hard with the team and reach the conclusion that the world needed a clicker game with a Star Wars theme. Hence the Wookie clicker idea was born...',
    },
    {
      id: 2,
      title: 'Skillset dashboard',
      description: 'Dashboard',
      src: skillsetDashboard,
      child: [
        { icon: html, size: 40 },
        { icon: css, size: 40 },
        { icon: javascript, size: 40 },
        { icon: react, size: 40 },
        { icon: tailwind, size: 40 },
      ],
      code: 'https://github.com/guillaume-leclout/Skillset-Modal-Project',
      demo: 'https://skillset-project.vercel.app/',
      origin:
        'While training with React JS, we came upon Modal so to train on it, I decided to build a fully scalable working dashboard where you can update your skills',
    },
    {
      id: 3,
      title: 'Happy Poo',
      description: 'Toilet locator',
      src: happyPoo,
      child: [
        { icon: html, size: 40 },
        { icon: css, size: 40 },
        { icon: javascript, size: 40 },
        { icon: react, size: 40 },
      ],
      code: 'https://github.com/guillaume-leclout/Hackathon_1',
      demo: 'https://hackathon-1-mocha.vercel.app/',
      origin:
        'During our first Hackathon, we were tasked to developp a fetching API wrking app that was themed around Travel,so we built a toilet locator. We used google map to show us Public toilets around us and tapped onto and API to list down private toilets (restaurants, café) that were willing to let you use them. It was an intense 48h hackathon but such a rewarding experience.',
    },
    {
      id: 4,
      title: 'Spotcast',
      description: 'Surf forecast',
      src: spotcast,
      child: [
        { icon: html, size: 40 },
        { icon: css, size: 40 },
        { icon: javascript, size: 40 },
        { icon: react, size: 40 },
        { icon: node, size: 40 },
        { icon: express, size: 40 },
        { icon: mysql, size: 40 },
      ],
      code: 'https://github.com/WildCodeSchool/2023-02-js-btz-spotcast',
      demo: { modal },
      origin:
        'For our 2nd team project, we were free to build whatever we wanted. Living in a surf region, our team decided to build something useful and yet to be out there: a neat & modulable forecast app for Surf spots. Spotcast was born, we have not yet deploy it as we feel our 1st MVP has improvments to be implemented before it can be deploy.',
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-[#0A1828] via-[#0A1828] to-[#103a4b] w-full text-[#BFA181] py-8 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-2 border-cyan-500 font-bold">
            My projects
          </p>
          <p className="py-6 text-xl">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-[auto,auto,1fr] gap-8 px-12 sm:px-0">
          {portfolios.map(
            ({ id, title, description, src, child, demo, code, origin }) => (
              <div
                key={id}
                className="grid grid-rows-[auto,auto,1fr]  py-4 hover:shadow-md hover:shadow-white hover:scale-105 hover:border-none duration-500 rounded-lg bg-gray-300 bg-opacity-5 border-2 border-cyan-500">
                <p className="flex justify-center pt-6 pb-4 text-xl font-bold">
                  {title}
                </p>
                <p className="flex justify-center text-lg pb-4 ">
                  {description}
                </p>
                <img
                  src={src}
                  alt={title}
                  className=" w-[85%] rounded-md mx-auto cursor-pointer"
                  onClick={() => setModal(id)}
                />
                <div className="flex items-center justify-center">
                  <div className="flex flex-wrap py-4">
                    {child &&
                      child.map((item, index) => (
                        <div
                          className="flex items-center justify-center px-6 py-2"
                          key={index}>
                          <img
                            className="max-w-full max-h-full"
                            src={item.icon}
                            alt={`Icon ${index}`}
                            style={{ width: item.size, height: item.size }}
                          />
                        </div>
                      ))}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  {title === 'Spotcast' ? (
                    <button
                      className="w-1/2 px-6 py-3 m-4 duration-200 text-lg hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-bold rounded-xl hover:duration-200"
                      onClick={() => setModal(id)}>
                      Demo
                    </button>
                  ) : (
                    <button className="w-1/2 px-6 py-3 m-4 duration-200 text-lg hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-bold rounded-xl hover:duration-200">
                      <a href={demo} target="_blank" rel="noopener noreferrer">
                        Demo
                      </a>
                    </button>
                  )}
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-bold rounded-xl hover:duration-200">
                    <a href={code} target="_blank" rel="noopener noreferrer">
                      Code
                    </a>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
        {modal && (
          <Modal
            title={portfolios[modal - 1].title}
            src={portfolios[modal - 1].src}
            demo={portfolios[modal - 1].demo}
            code={portfolios[modal - 1].code}
            origin={portfolios[modal - 1].origin}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Portfolio;
