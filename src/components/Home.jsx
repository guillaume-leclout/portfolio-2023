import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-[#0A1828] via-[#0A1828] to-[#103a4b] ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="py-10 text-4xl sm:text-7xl font-bold text-[#BFA181]">
            I'm a Junior Web Developer
          </h2>
          <p className="text-[#BFA181] text-xl py-4 max-w-md pt-10">
            After 13 years of experience and entrepreneurship in the tourism and
            hotel sector in Asia, I have chosen to reinvent myself
            professionally and embrace my passion: the tech industry.
          </p>{' '}
          <br />
          <p className="text-[#BFA181] text-xl py-4 max-w-md pb-10">
            I am currently studying to become a web developer at the Wild Code
            School in Biarritz, and I am looking for a one-year work/study
            training programme or a four-month internship starting in September
            2023.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
