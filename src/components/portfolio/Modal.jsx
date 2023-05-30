import React, { useEffect } from 'react';
import { FaTimes, FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const Modal = ({ title, src, demo, code, origin, closeModal }) => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('modal-overlay')) {
        closeModal();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [closeModal]);
  return (
    <div className="modal-overlay fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div
        className="bg-[#103a4b] rounded-lg p-4 flex flex-col items-center justify-start border-2 border-[#BFA181] overflow-y-scroll w-[90%] max-h-[85vh]"
        style={{ maxWidth: '600px' }}>
        <div className="flex justify-between items-center w-full h-20 px-4">
          <h2 className="text-xl font-bold mb-4 py-2">Project name: {title}</h2>
          <button className="modal-close-button" onClick={closeModal}>
            <FaTimes size={30} />
          </button>
        </div>
        <img src={src} alt={title} className="w-[85%] rounded-lg py-4" />
        <p className="text-md py-2">{origin}</p>
        <p className="text-md py-2">
          If you would like to know how it was built, you can find the code
          source here:
        </p>
        <a href={code} target="_blank" rel="noopener noreferrer">
          <FaGithub size={40} />
        </a>
        <p className="text-md py-2">And here is its deployment URL:</p>
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <TbWorldWww size={40} />
        </a>
      </div>
    </div>
  );
};

export default Modal;
