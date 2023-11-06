import React from 'react';
import Head from 'next/head';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página dashboard',
  description: 'Esta é a página',
}

const MeuDash: React.FC = () => {
  return (
    <>
      <Head>
        <title>Página Dashboard</title>
        <meta name='keywords' content='Roupas, Calçados, Teste'></meta>
        <meta name='description' content='Encontre a melhor roupas'></meta>
      </Head>
      <h1>meu dash</h1> 
    </>
  );
}
 
export default MeuDash;