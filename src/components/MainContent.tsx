import { ReactNode } from 'react';
import Header from "./Header";
import Footer from "./Footer";

interface MainContentProps {
  children: ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
}
 
export default MainContent;