import Link from "next/link";

const Header = () => {
  return ( 
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/about">Sobre</Link>
          </li>
          <li>
            <Link href="/teste">Teste</Link>
          </li>
        </ul>
      </nav>
      <hr></hr>
    </div>
   );
}
 
export default Header;