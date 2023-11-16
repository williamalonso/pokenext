import { getAllPokemons } from "@/api/getAllPokemons";
import styles from '../styles/Home.module.css';
import Image from "next/image";
import Pokemon from "@/interfaces/pokemonType";
import Card from "@/components/Card";

export async function getStaticProps() {
  
  const res = await getAllPokemons();
  const data = res.results;

  return {
    props: {
      data,
    }
  }
}

const Home: React.FC<Pokemon> = ({ data }) => {
  
  // console.log(data);

  return (
    <>
      <div className={` flex justify-center items-center flex-col ${styles.title_container}`}>      
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image src="/images/pokeball.png" width={50} height={50} alt="Pokenext" />
        <br></br>
      </div>
      <div className={styles.pokemon_container}>
        {
          data.map( (pokemon, index) => (
            <Card key={index} data={pokemon.name} id={index} />
          ))
        }
      </div>
    </>
  )
}
export default Home;