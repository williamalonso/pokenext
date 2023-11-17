interface pokemonDetail {
  pokemon: {
    id: string;
    name: string;
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    height: number;
    weight: number;
  };
}

export default pokemonDetail;