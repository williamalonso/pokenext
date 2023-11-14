import { getAllPokemons } from "@/api/getAllPokemons";

interface Pokemon {
  data: {
    results: {
      name: string;
    }[];
  };
}

export async function getStaticProps() {
  
  const data = await getAllPokemons();

  return {
    props: {
      data,
    }
  }
}

const Home: React.FC<Pokemon> = ({ data }) => {
  
  console.log(data);

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Home page</h1>
      <br></br>
      <ul>
        {
          data.results.map( (pokemon, index) => (
            <li key={index}>
              {pokemon.name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}
export default Home;