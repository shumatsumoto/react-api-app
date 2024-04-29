import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async (page) => {
    const apiUrl = "https://narutodb.xyz/api/character";
    const result = await axios.get(apiUrl, { params: { page } });
    setCharacters(result.data.characters);
  };
  return (
    <div className="container">
      <main>
        <div className="cards-container">
          {characters.map((character, index) => (
            <div className="card" key={index}>
              <img
                src={character.images[0] || "dummy.png"}
                alt={character.name}
                className="card-image"
              />
              <div className="card-content">
                <h2 className="card-title">{character.name}</h2>
                <p className="card-description">
                  {character.debut?.appearsIn ?? "なし"}
                </p>
                <div className="card-footer">
                  <span className="afiliation">
                    {character.personal?.affiliation ?? "なし"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pager">
          <button className="prev">Previous</button>
          <span className="page-number">1</span>
          <button className="next">Next</button>
        </div>
      </main>
    </div>
  );
}

export default App;
