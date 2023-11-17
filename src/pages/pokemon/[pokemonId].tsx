import Link from "next/link";
import { GetStaticPropsContext } from "next";
import pokemonDetail from "@/interfaces/pokemonDetail";
import Image from "next/image";
import styles from "../../styles/Pokemon.module.css";

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

    // console.log(data);

    // params
    const paths = data.results.map((_pokemon, index) => ({
      params: { pokemonId: (index+1).toString() },
    }));

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

  if (!id) {
    console.error("ID do Pokémon não encontrado nos parâmetros.");
    return {
      notFound: true,
    };
  }

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

const pokemonDetail: React.FC<pokemonDetail> = ({ pokemon }) => {

  // console.log(pokemon);

  return(
    <>
      <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width="200"
        height="200"
        alt={pokemon.name}
        className="ml-auto mr-auto"
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles['type_' + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default pokemonDetail;