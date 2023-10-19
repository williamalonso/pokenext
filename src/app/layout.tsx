import type { Metadata } from 'next'; // é usado para definir informações de metadados para suas páginas
import { Inter } from 'next/font/google'; // Isso importa a fonte 'Inter' do Google Fonts usando o pacote 'next/font/google'.
import '../styles/globals.css'
import MainContent from '@/components/MainContent';

//  Isso cria uma instância da fonte 'Inter' com o subconjunto 'latin' e armazena-a na variável inter. Esta fonte será usada para definir a classe de estilo do componente <body> mais tarde.
const inter = Inter({ subsets: ['latin'] })

//  Isso define um objeto metadata que contém informações de metadados para a página. Os metadados incluem o título da página e a descrição. Essas informações podem ser usadas para SEO e metatags no cabeçalho da página.
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

//   Este é o componente de layout principal para as páginas do seu aplicativo. Ele recebe um único prop chamado children, que é um componente React ou elementos React que serão renderizados dentro deste layout.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <MainContent>
          {children}
        </MainContent>
      </body>
    </html>
  )
}
