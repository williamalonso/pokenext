import Link from "next/link";
import { GetStaticPropsContext } from "next";

interface Pokemon {
  name: string;
  url: string;
}

export async function getStaticPaths() {
  
  try {
    
    const maxPokemons = 10;
    const api = 'https://pokeapi.co/api/v2/pokemon/'
  
    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data: { count: number; results: Pokemon[] } = await res.json();

    console.log(data);

   // params
    const paths = data.results.map((_pokemon, index) => {
      return {
        params: { pokemonId: (index + 1).toString() },
      }
    })

    return {
      paths,
      fallback: false,
    };

  } catch (error) {

    console.error("Erro ao obter os paths:", error);
    
  }

}

export async function getStaticProps(context: GetStaticPropsContext) {

  const id = context.params?.pokemonId;

  try {
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  
    const data = await res.json();

    if (!data) {
      console.error("Dados do Pokémon não encontrados.");
      return {
        notFound: true,
      };
    }
  
    return {
      props: { pokemon: data },
    }

  } catch (error) {

    console.error("Erro ao obter detalhes do Pokémon:", error);
    
  }

}

const pokemonDetail: React.FC = () => {
  return(
    <>
      <h1>pagina detalhes</h1>
      <Link href="/">Voltar</Link>
    </>
  );
}

export default pokemonDetail;