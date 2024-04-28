import { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const apiUrl = "https://narutodb.xyz/api/character";
    const result = await axios.get(apiUrl);
    console.log(result.data.characters);
  };
  return <div className="App">Hello!!!</div>;
}

export default App;
