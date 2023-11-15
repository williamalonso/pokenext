import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../styles/Layout.module.css"

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <>
      <Navbar />
        <main className={styles.main__content}>
          {children}
        </main>
      <Footer />
    </>
  );
}
 
export default Layout;