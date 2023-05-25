import React from 'react';
import wookieClicker from '../assets/portfolio/wookie-clicker.png';
import skillsetDashboard from '../assets/portfolio/skillset-dashboard.png';
import happyPoo from '../assets/portfolio/happy-poo.png';
import spotcast from '../assets/portfolio/spotcast.png';

const Portfolio = () => {
  const portfolios = [
    { id: 1, title: 'Clicker game', src: wookieClicker },
    { id: 2, title: 'Skill dashboard', src: skillsetDashboard },
    { id: 3, title: 'Toilet locator', src: happyPoo },
    { id: 4, title: 'Surf forecast', src: spotcast },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-[#0A1828] via-[#0A1828] to-[#103a4b] w-full text-[#BFA181] md:h-screen py-8 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-2 border-cyan-500 font-bold">
            My projects
          </p>
          <p className="py-6 text-xl">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, src }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center hover:shadow-md hover:shadow-white hover:scale-105 hover:border-none duration-500 rounded-lg bg-transparent border-2 border-cyan-500">
              <p className="flex justify-center py-6 text-lg font-bold">
                {title}
              </p>
              <img src={src} alt={title} className=" w-[85%] rounded-md" />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-bold hover:rounded-xl hover:duration-200">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-bold hover:rounded-xl hover:duration-200">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
