import React, { useState, useEffect } from 'react';

export default function PokemonTest() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    
    async function f() {
      try { 
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        if (!response.ok) {
          throw new Error("!!!")
        }
        const data = await response.json();
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            return pokemonResponse.json();
          })
        );  

        setPokemons([...pokemonDetails].sort((a, b) => a.name.localeCompare(b.name)));
      }
      catch (error) {
        console.error(error);
      }
    }
    
    f();

  }, []); 

  return (
    <main className="">  
        <div className="flex items-center justify-center w-full">

          <div>
                {pokemons.map(pokemon => (
                    <div key={pokemon.name}>
                        <h2>{pokemon.name}</h2>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                ))}
          </div>

        </div>
    </main>
  )
}