import Link from "next/link";
import { getAllPokemons } from "@/api/getAllPokemons";
import Pokemon from "@/interfaces/pokemonType";
import { GetStaticPropsContext } from "next";

// interface dataProps {
//   data: any;
// }

export async function getStaticPaths() {

  try {
    // Certifique-se de que a função getAllPokemons está definida corretamente
    const res: Pokemon[] = await getAllPokemons();

    if (!Array.isArray(res)) {
      throw new Error("A resposta não é um array.");
    }

    const paths = res.map((pokemon, index) => ({
      params: {
        pokemonId: String(index + 1),
      },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Erro ao obter os paths:", error);
    return {
      paths: [],
      fallback: false,
    };
  }

}

export async function getStaticProps(context: GetStaticPropsContext) {

  const { params } = context;

  try {
    if (!params || typeof params.pokemonId !== 'string') {
      throw new Error("Parâmetros inválidos.");
    }

    const pokemonId = parseInt(params.pokemonId, 10);
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Erro ao buscar detalhes do Pokémon ${pokemonId}.`);
    }

    const pokemonDetails = await response.json();

    return {
      props: {
        pokemonDetails,
      },
    };
  } catch (error) {
    console.error("Erro ao obter detalhes do Pokémon:", error);
    return {
      props: {},
    };
  }

}

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