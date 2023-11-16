import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CardProps from '@/interfaces/cardType';
import style from '../styles/Card.module.css';

const Card: React.FC<CardProps> = ( props ) => {

  // console.log(props);

  return (
    <div className={style.card}>
      <Image src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${props.id + 1}.svg`} width="120" height="120" style={{ height: 'auto' }} alt="Pokemon" />
      <p className={style.id}>
        {props.id + 1}
      </p>
      <h3 className={style.title}>
        {props.data}
      </h3>
      <Link href={`/pokemon/${props.id + 1}`} className={style.btn}>
        Detalhes
      </Link>
    </div>
  );

}

export default Card;
