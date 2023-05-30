import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-[#BFA181]  bg-gradient-to-b from-[#103a4b] via-[#0A1828] to-[#0A1828] relative ">
      <div>
        <Link to="home" smooth duration={1000}>
          <h1 className="text-3xl font-signature ml-2 cursor-pointer">MrG</h1>
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-bold text-xl text-[#BFA181] hover:text-cyan-500 hover:font-bold hover:scale-105 duration-200">
            <Link to={link} smooth duration={1000}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-[#BFA181] md:hidden">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#0A1828] via-[#0A1828] to-[#103a4b] text-[#BFA181]">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={1000}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
