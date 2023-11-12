import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <p>Parece que esta página não existe.</p>
      <h1>404</h1>
      <Link href="/">Voltar</Link>
    </div>
  );
}
 
export default NotFound;