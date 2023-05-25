import React from 'react';
import wookieClicker from '../assets/portfolio/wookie-clicker.png';
import skillsetDashboard from '../assets/portfolio/skillset-dashboard.png';
import happyPoo from '../assets/portfolio/happy-poo.png';
import spotcast from '../assets/portfolio/spotcast.png';

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: wookieClicker },
    { id: 2, src: skillsetDashboard },
    { id: 3, src: happyPoo },
    { id: 4, src: spotcast },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-[#0A1828] via-[#0A1828] to-[#103a4b] w-full pb-8 text-[#BFA181] md:h-screen ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl inline border-b-2 border-cyan-500 font-bold">
            Portfolio
          </p>
          <p className="py-10 text-xl">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-white rounded-2xl bg-[#0A1828] bg-opacity-25">
              <img
                src={src}
                alt=""
                className="rounded-2xl object-cover mx-auto w-9/10 h-2/3 pt-4 duration-200 hover:scale-105"
              />
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
