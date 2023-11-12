import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 mb-4 bg-[#333] text-[#fff]">
      <div className="flex justify-center items-center">
        <Image src="/images/pokeball.png" width={30} height={30} alt="Imagem de uma pokebola" />
        <h1 className="ml-4">PokeNext</h1>
      </div>
      <ul className="flex list-none">
        <li className="mr-4">
          <Link href="/" className="text-[#fff] p-4 border-b-2 border-solid border-transparent hover:border-[#fff] transition-all duration-400">
            Home
          </Link>
        </li>
        <li className="mr-4">
          <Link href="/about" className="text-[#fff] p-4 border-b-2 border-solid border-transparent hover:border-[#fff] transition-all duration-400">
            Sobre
          </Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default Navbar;