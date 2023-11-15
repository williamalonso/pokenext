import React from 'react';
import CardProps from '@/interfaces/cardType';

const Card: React.FC<CardProps> = ( props ) => {

  // console.log(props);

  return (
    <div>
      <h3>
        {props.data}
      </h3>
    </div>
  );

}

export default Card;
