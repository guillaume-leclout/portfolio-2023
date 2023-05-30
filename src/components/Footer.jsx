import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={40} />
        </>
      ),
      href: 'https://linkedin.com/in/guillaume-leclout/',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={40} />
        </>
      ),
      href: 'https://github.com/guillaume-leclout',
      style: 'rounded-tr-md',
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={40} />
        </>
      ),
      href: 'mailto:guillaumeleclout@gmail.com',
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={40} />
        </>
      ),
      href: '/GuillaumeLecloutResume.pdf',
      style: 'rounded-br-md',
      download: true,
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setShowFooter(windowWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return showFooter ? (
    <footer>
      <div className="w-full h-30 bottom-0 left-0 right-0 bg-gradient-to-b from-[#103a4b] via-[#103a4b] to-[#0A1828]">
        <ul className="flex justify-around py-4">
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={` w-20 h-20 rounded-md  hover:scale-110 duration-300 ${
                style || 'rounded-md'
              }`}>
              <a
                href={href}
                className="text-[#BFA181] text-lg font-bold flex flex-col justify-center items-center"
                download={download}
                target="_blank"
                rel="noreferrer">
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  ) : null;
};

export default Footer;
