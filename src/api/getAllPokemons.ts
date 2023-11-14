export async function getAllPokemons() {
  const maxPokemons = 10;
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  const res = await fetch(`${apiUrl}?limit=${maxPokemons}`);
  const data = await res.json();
  return data;
}