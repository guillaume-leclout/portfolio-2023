import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-[#103a4b] via-[#103a4b] to-[#0A1828] text-[#BFA181]">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-cyan-500">
            Get to know me a little better
          </p>
        </div>
        <p className="text-xl mt-20 py-4 max-w-md">
          After 13 years of experience and entrepreneurship in the tourism and
          hotel sector in Asia, I have chosen to reinvent myself professionally
          and embrace my passion: the tech industry.
        </p>
        <p className="text-[#BFA181] text-xl mt-20 py-4 max-w-md">
          I am currently studying to become a web developer at the Wild Code
          School in Biarritz, and I am looking for a one-year work/study
          training programme or a four-month internship starting in September
          2023.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
