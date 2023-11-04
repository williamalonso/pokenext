import { ReactNode } from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import styles from '../styles/MainContent.module.css';

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      <div className={styles.container__MainContent}>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
 
export default MainContent;