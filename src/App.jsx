import { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import charactersData from './data/characters.json';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      // Chargement des données des personnages
      setCharacters(charactersData);
      setLoading(false);
    } catch (err) {
      console.error("Erreur lors du chargement des données:", err);
      setError("Impossible de charger les données des personnages. Veuillez réessayer plus tard.");
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div className="loading">Chargement du jeu...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <GameBoard characters={characters} />
    </div>
  );
}

export default App
