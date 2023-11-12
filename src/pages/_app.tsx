//  Esse arquivo é usado para configurar todas as páginas da aplicação. Aqui podemos por exemplo envolver toda a aplicação com COntextAPI ou Redux

import '../styles/globals.css'; // importando estilo global para ser usado em toda a aplicação
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;