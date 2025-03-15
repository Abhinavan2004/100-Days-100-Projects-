import { useState } from "react";
import "./index.css"

function App() {
  const [pokemonId, setPokemonId] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const getFromApi = async () => {
    if (!pokemonId || pokemonId < 1 || pokemonId > 100) {
      alert("Please enter a number between 1 and 100.");
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemonData({
        name: data.name.toUpperCase(),
        image: data.sprites.front_default,
      });
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
      alert("Failed to fetch Pokémon data.");
    }
  };

  return (
    <>
    <h3> GO GO POKEMON</h3>
      <div className="search_box">
        <input
          type="number"
          placeholder="Enter a number (1-100)"
          value={pokemonId}
          onChange={(e) => setPokemonId(e.target.value)}
        /><br></br>
        <button onClick={getFromApi} id="btn">Submit</button>
      </div>

      {pokemonData && (
        <div className="display">
          <h3>NAME: {pokemonData.name}</h3>
          <img src={pokemonData.image} alt={pokemonData.name} />
        </div>
      )}
    </>
  );
}

export default App;
