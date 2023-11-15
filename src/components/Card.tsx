import React from 'react';
import CardProps from '@/interfaces/cardType';
import Image from 'next/image';

const Card: React.FC<CardProps> = ( props ) => {

  // console.log(props);

  return (
    <div>
      <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id + 1}.svg`} width="120" height="120" style={{ height: 'auto' }} alt="Pokemon" />
      <h3>
        {props.data}
      </h3>
    </div>
  );

}

export default Card;
