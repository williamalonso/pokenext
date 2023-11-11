import React from "react";
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <div>
      <Image src="/images/b.jpg" width={200} height={200} alt="imagem aleatoria"></Image>
      Hello World usando App Router
    </div>
  )
}

export default Home;