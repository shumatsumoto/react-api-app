import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async (page) => {
    const apiUrl = "https://narutodb.xyz/api/character";
    setIsLoading(true);
    const result = await axios.get(apiUrl, { params: { page } });
    setCharacters(result.data.characters);
    setIsLoading(false);
  };
  const handleNext = async () => {
    const nextPage = page + 1;
    fetchCharacters(nextPage);
    setPage(nextPage);
  };
  return (
    <div className="container">
      {isLoading ? (
        <div className="loading">Now Loading...</div>
      ) : (
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
            <span className="page-number">{page}</span>
            <button className="next" onClick={handleNext}>
              Next
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;
