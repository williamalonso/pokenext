import Link from "next/link";

const Header = () => {
  return ( 
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/products">Produtos</Link>
          </li>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </div>
   );
}
 
export default Header;