//  Esse arquivo é usado para configurar todas as páginas da aplicação. Aqui podemos por exemplo envolver toda a aplicação com COntextAPI ou Redux

import Head from 'next/head';
import '../styles/globals.css'; // importando estilo global para ser usado em toda a aplicação
import type { AppProps } from 'next/app';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <title>PokeNext</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;