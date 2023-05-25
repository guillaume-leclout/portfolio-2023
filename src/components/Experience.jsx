import React from 'react';
import { AiFillStar } from 'react-icons/ai';

import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import express from '../assets/expressjs.png';
import mysql from '../assets/mysql.png';
import tailwind from '../assets/tailwind.png';
import npm from '../assets/npm.png';
import gitbash from '../assets/gitbash.png';
import github from '../assets/github.png';
import figma from '../assets/figma.png';
import canva from '../assets/canva.png';
import meta from '../assets/meta.png';
import shopify from '../assets/shopify.png';

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      level: AiFillStar,
      style: 'shadow-orange-500',
      rating: 5,
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      level: AiFillStar,
      style: 'shadow-blue-500',
      rating: 4,
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      level: AiFillStar,
      style: 'shadow-yellow-500',
      rating: 4,
    },
    {
      id: 4,
      src: react,
      title: 'React',
      level: AiFillStar,
      style: 'shadow-blue-600',
      rating: 5,
    },
    {
      id: 5,
      src: node,
      title: 'Node-JS',
      level: AiFillStar,
      style: 'shadow-green-500',
      rating: 3,
    },
    {
      id: 6,
      src: express,
      title: 'Express-JS',
      level: AiFillStar,
      style: 'shadow-white',
      rating: 4,
    },
    {
      id: 7,
      src: mysql,
      title: 'MySQL',
      level: AiFillStar,
      style: 'shadow-blue-300',
      rating: 4,
    },
    {
      id: 8,
      src: tailwind,
      title: 'Tailwind',
      level: AiFillStar,
      style: 'shadow-sky-400',
      rating: 3,
    },
    {
      id: 9,
      src: npm,
      title: 'NPM',
      level: AiFillStar,
      style: 'shadow-red-500',
      rating: 5,
    },
    {
      id: 10,
      src: gitbash,
      title: 'GitBash',
      level: AiFillStar,
      style: 'shadow-yellow-500',
      rating: 5,
    },
    {
      id: 11,
      src: github,
      title: 'GitHub',
      level: AiFillStar,
      style: 'shadow-gray-400',
      rating: 4,
    },
    {
      id: 12,
      src: figma,
      title: 'Figma',
      level: AiFillStar,
      style: 'shadow-purple-500',
      rating: 3,
    },
    {
      id: 13,
      src: canva,
      title: 'Canva',
      level: AiFillStar,
      style: 'shadow-cyan-500',
      rating: 4,
    },
    {
      id: 14,
      src: shopify,
      title: 'Shopify',
      level: AiFillStar,
      style: 'shadow-green-500',
      rating: 4,
    },
    {
      id: 15,
      src: meta,
      title: 'Meta',
      level: AiFillStar,
      style: 'shadow-cyan-800',
      rating: 4,
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-[#103a4b] via-[#103a4b] to-[#0A1828] w-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-[#BFA181]">
        <div>
          <p className="text-4xl font-bold border-b-2 border-cyan-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, level, style, rating }) => (
            <div
              key={id}
              className={`flex flex-col justify-center items-center shadow-md text-lg hover:scale-105 hover:font-bold duration-500 py-2 rounded-lg bg-[#0A1828] bg-opacity-25 ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
              <div className="flex justify-center">
                {Array.from({ length: rating }).map((_, index) => (
                  <AiFillStar key={index} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
