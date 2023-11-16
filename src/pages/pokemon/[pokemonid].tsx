import Link from "next/link";
import { getAllPokemons } from "@/api/getAllPokemons";
import Pokemon from "@/interfaces/pokemonType";
import { GetStaticPropsContext } from "next";

// interface dataProps {
//   data: any;
// }

// export async function getStaticPaths() {

//   const maxPokemons = 10;
//   const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
//   const res = await fetch(`${apiUrl}?limit=${maxPokemons}`);
//   const data: Pokemon[] = await res.json();
//   console.log(data);

//   const paths = pokemons.map( (pokemon, index) => ({
//     params: {
//       pokemonId: String(index+1)
//     }
//   }) );

//   return {
//     paths,
//     fallback: false,
//   }
// }

// export async function getStaticProps(context: GetStaticPropsContext) {

//   const { params } = context;

//   if(!params || !params.pokemonId) {
//     throw new Error('Parâmetro pokemonId não encontrado na url');
//   }

//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemonId}`);
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     }
//   }

// }

const pokemonDetail: React.FC = () => {
  // console.log(data);
  return(
    <>
      <h1>pagina detalhes</h1>
      <Link href="/">Voltar</Link>
    </>
  );
}

export default pokemonDetail;