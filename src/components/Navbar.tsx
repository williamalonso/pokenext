import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar: React.FC = () => {
  return ( 
    <div>
      <nav>
        <ul className={styles.navbar}>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </div>
   );
}
 
export default Navbar;