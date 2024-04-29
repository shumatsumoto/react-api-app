import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const apiUrl = "https://narutodb.xyz/api/character";
    const result = await axios.get(apiUrl);
    setCharacters(result.data.characters);
    console.log(result);
  };
  return (
    <div className="container">
      <main>
        <div className="card-container">
          {characters.map((character, index) => (
            <div className="card" key={index}>
              <div className="card-image">
                <img
                  src={character.images[0] || "dummy.png"}
                  alt={character.name}
                />
              </div>
              <div className="card-content">
                <h2>{character.name}</h2>
                <p>{character.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
