import { useEffect, useState } from "react";


export default function pokemon() {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    
    async function f() {
      try { 
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
        if (!response.ok) {
          throw new Error("!!!")
        }
        const data = await response.json();
        setPokemons(data.results);
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
          <div className="text-left p-8 flex-grow flex-basis-3/4">
            <ol>
              {
                pokemons.map(pokemon => (
                //   <PokemonCard name={pokemon.name} url={pokemon.url} />
                  <li key={pokemon.name}> {pokemon.name} </li>
                ))
              }
            </ol>
          </div>

        </div>
    </main>
  )
}