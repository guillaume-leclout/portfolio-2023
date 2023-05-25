import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-[#103a4b] via-[#103a4b] to-[#0A1828] text-[#BFA181] pb-8">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-cyan-500">
            Get to know me a little better
          </p>
        </div>
        <p className="py-10 text-xl mt-8">
          Après 13 années d'expérience et d'entreprenariat dans le secteur du
          tourisme et de l'hôtellerie en Asie, j'ai choisi de me réorienter
          professionnellement vers ma passion: l'informatique. Actuellement en
          formation de développeur web à la Wild Code School sur le campus de
          Biarritz, je suis à la recherche d'une alternance d'une durée d'un an
          ou d'un stage de quatre mois minimum à partir de septembre 2023.
        </p>
        <br />
        <p className="text-xl">
          Passionné par l'univers en constante évolution de la tech, je suis à
          la recherche d'une entreprise innovante et dynamique qui saura me
          permettre de m'épanouir pleinement. En tant que développeur web, je
          suis compétent en Front et Back, et je maîtrise notamment la
          bibliothèque React, le framework Express JS ou encore la data avec des
          outils comme MySQL. Mon objectif est de rejoindre une entreprise où je
          pourrai apporter mes compétences et expériences passées, apprendre de
          nouvelles technologies et grandir professionnellement.
        </p>
      </div>
    </div>
  );
};

export default About;
