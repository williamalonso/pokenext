import styles from '../styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <>
      <footer className={` ${styles.footer} flex justify-center`}>
        <p>Curso de Next.js &copy; 2023</p>
      </footer>
    </>
  );
}
 
export default Footer;