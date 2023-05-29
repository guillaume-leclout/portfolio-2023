import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const Modal = ({ title, src, demo, code, origin, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div
        className="bg-[#103a4b] rounded-lg p-8 flex flex-col items-center justify-center border-2 border-[#BFA181] w-[90%] h-[90%]"
        style={{ maxWidth: '600px' }}>
        <h2 className="text-2xl font-bold mb-4 py-2">Project name: {title}</h2>
        <img src={src} alt={title} className="w-[85%] rounded-lg py-4" />
        <p className="text-lg py-2">{origin}</p>
        <p className="text-lg py-2">
          If you would like to know how it was built, you can find the code
          source here:
        </p>
        <a href={code} target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <p className="text-lg py-2">And here is its deployment URL:</p>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <TbWorldWww size={40} />
        </a>
        <div className="flex items-center justify-center mt-2">
          <button
            className=" px-6 py-2 m-2 duration-200 hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white hover:font-bold rounded-xl hover:duration-200"
            onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
