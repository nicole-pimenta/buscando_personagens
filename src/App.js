import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [character, setCharacter] = useState([]);

  const [currentPage, setCurrentPage] = useState(
    "https://rickandmortyapi.com/api/character"
  );

  useEffect(() => {
    fetch(currentPage)
      .then((response) => response.json())
      .then((response) => setCharacter(response.results));
  }, [currentPage]);

  const handleNext = () => {
    fetch(currentPage)
      .then((response) => response.json())
      .then((response) => setCurrentPage(response.info.next));
  };

  const handlePrevious = () => {
    fetch(currentPage)
      .then((response) => response.json())
      .then((response) => setCurrentPage(response.info.prev));
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-button">
          <button onClick={handlePrevious}>previous characters</button>
          <button onClick={handleNext}>next characters</button>
        </div>

        <div className="container">
          {character.map((character, index) => (
            <div className="card" key={index}>
              <img alt={character.name} src={character.image}></img>
              <p>{character.name}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
