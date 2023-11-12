import React from "react";
import '../styles/globals.css';
import Image from "next/image";

const About: React.FC = () => {
  return ( 
    <div className="text-center">
      <h1 className="text-[2em] mb-[1em]">Sobre o projeto</h1>
      <p className="mt-0 mb-[1.5rem] mx-auto max-w-[500px] leading-8">
        Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
      </p>
      <Image src="/images/charizard.png" width={300} height={293} alt="Imagem do Charizard" className="my-0 mx-auto" />
    </div>
  );
}

export default About;