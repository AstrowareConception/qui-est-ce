import React, { useState, useEffect, useRef } from 'react';
import CharacterCard from './CharacterCard';
import QuestionPanel from './QuestionPanel';
import Header from './Header';
import Footer from './Footer';
import { questions } from '../utils/questions';
import { filterCharacters, isCorrectGuess, countRemainingCharacters } from '../utils/filterCharacters';
import './GameBoard.css';

/**
 * Composant principal du jeu qui gère l'état et la logique
 */
const GameBoard = ({ characters }) => {
  // État du jeu
  const [gameCharacters, setGameCharacters] = useState([]);
  const [mysteryCharacter, setMysteryCharacter] = useState(null);
  const [askedQuestions, setAskedQuestions] = useState([]);
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [message, setMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const gameContainerRef = useRef(null);

  // Initialisation du jeu
  useEffect(() => {
    startNewGame();
  }, [characters]);

  // Démarre une nouvelle partie
  const startNewGame = () => {
    // Copie les personnages et réinitialise leur état
    const initialCharacters = characters.map(char => ({
      ...char,
      eliminated: false
    }));

    // Choisit un personnage mystère aléatoirement
    const randomIndex = Math.floor(Math.random() * characters.length);
    const mystery = characters[randomIndex];

    // Met à jour l'état
    setGameCharacters(initialCharacters);
    setMysteryCharacter(mystery);
    setAskedQuestions([]);
    setGameStatus('playing');
    setMessage('Posez des questions pour trouver le personnage mystère !');
    setShowModal(false);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Gère la pose d'une question
  const handleAskQuestion = (question) => {
    if (gameStatus !== 'playing') return;

    // Détermine la réponse à la question
    let answer = false;

    // Gestion des questions sur les voisins
    if (question.neighborType) {
      // Trouve l'index du personnage mystère dans le tableau des personnages
      const mysteryIndex = characters.findIndex(char => char.id === mysteryCharacter.id);

      // Gestion des questions sur le voisin de gauche
      if (question.neighborType === "left") {
        // Vérifie si le personnage mystère a un voisin de gauche
        if (mysteryIndex > 0) {
          const leftNeighbor = characters[mysteryIndex - 1];

          // Vérifie la propriété du voisin de gauche
          if (question.notExpectedValue) {
            answer = leftNeighbor[question.property] !== question.notExpectedValue;
          } else {
            answer = question.expectedValue !== undefined
              ? leftNeighbor[question.property] === question.expectedValue
              : leftNeighbor[question.property] === true;
          }
        } else {
          // Pas de voisin de gauche, la réponse est toujours "non"
          answer = false;
        }
      }
      // Gestion des questions sur le voisin de droite
      else if (question.neighborType === "right") {
        // Vérifie si le personnage mystère a un voisin de droite
        if (mysteryIndex < characters.length - 1) {
          const rightNeighbor = characters[mysteryIndex + 1];

          // Vérifie la propriété du voisin de droite
          if (question.notExpectedValue) {
            answer = rightNeighbor[question.property] !== question.notExpectedValue;
          } else {
            answer = question.expectedValue !== undefined
              ? rightNeighbor[question.property] === question.expectedValue
              : rightNeighbor[question.property] === true;
          }
        } else {
          // Pas de voisin de droite, la réponse est toujours "non"
          answer = false;
        }
      }
      // Gestion des questions sur les deux voisins
      else if (question.neighborType === "both") {
        // Vérifie si le personnage mystère a des voisins des deux côtés
        const hasLeftNeighbor = mysteryIndex > 0;
        const hasRightNeighbor = mysteryIndex < characters.length - 1;

        if (hasLeftNeighbor && hasRightNeighbor) {
          const leftNeighbor = characters[mysteryIndex - 1];
          const rightNeighbor = characters[mysteryIndex + 1];

          // Vérifie la propriété des deux voisins
          let leftMatch, rightMatch;

          if (question.notExpectedValue) {
            leftMatch = leftNeighbor[question.property] !== question.notExpectedValue;
            rightMatch = rightNeighbor[question.property] !== question.notExpectedValue;
          } else {
            leftMatch = question.expectedValue !== undefined
              ? leftNeighbor[question.property] === question.expectedValue
              : leftNeighbor[question.property] === true;

            rightMatch = question.expectedValue !== undefined
              ? rightNeighbor[question.property] === question.expectedValue
              : rightNeighbor[question.property] === true;
          }

          // Les deux voisins doivent correspondre pour que la réponse soit "oui"
          answer = leftMatch && rightMatch;
        } else {
          // S'il manque un voisin, la réponse est toujours "non"
          answer = false;
        }
      }
    }
    // Gestion des questions avec plusieurs propriétés (questions combinées)
    else if (question.properties) {
      // Toutes les propriétés doivent correspondre pour que la réponse soit "oui"
      answer = question.properties.every(propObj => {
        const { property, expectedValue } = propObj;
        const mysteryValue = mysteryCharacter[property];
        return expectedValue === mysteryValue;
      });
    } 
    // Gestion des questions avec un tableau de valeurs attendues
    else if (question.expectedValues) {
      const { property, expectedValues } = question;
      const mysteryValue = mysteryCharacter[property];
      answer = expectedValues.includes(mysteryValue);
    }
    // Gestion des questions avec une valeur non attendue
    else if (question.notExpectedValue) {
      const { property, notExpectedValue } = question;
      const mysteryValue = mysteryCharacter[property];
      answer = mysteryValue !== notExpectedValue;
    }
    // Gestion des questions standard
    else {
      const { property, expectedValue } = question;
      const mysteryValue = mysteryCharacter[property];
      answer = expectedValue !== undefined
        ? mysteryValue === expectedValue
        : mysteryValue === true;
    }

    // Ajoute la question à la liste des questions posées
    const newAskedQuestions = [
      ...askedQuestions,
      { ...question, answer }
    ];
    setAskedQuestions(newAskedQuestions);

    // Filtre les personnages en fonction de la réponse
    const updatedCharacters = filterCharacters(gameCharacters, mysteryCharacter, question);
    setGameCharacters(updatedCharacters);

    // Vérifie s'il ne reste qu'un seul personnage
    const remainingCount = countRemainingCharacters(updatedCharacters);
    if (remainingCount === 1) {
      // Trouve le dernier personnage non éliminé
      const lastCharacter = updatedCharacters.find(char => !char.eliminated);

      // Vérifie si c'est le bon personnage
      const correct = isCorrectGuess(lastCharacter, mysteryCharacter);

      if (correct) {
        setGameStatus('won');
        setMessage(`Bravo ! Vous avez trouvé ${mysteryCharacter.firstName} ${mysteryCharacter.lastName} !`);
        setShowModal(true);
        // Scroll to top
        if (gameContainerRef.current) {
          gameContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Ce cas ne devrait pas arriver si la logique de filtrage est correcte,
        // mais on le gère quand même par sécurité
        setGameStatus('lost');
        setMessage(`Dommage ! Le personnage mystère était ${mysteryCharacter.firstName} ${mysteryCharacter.lastName}.`);
        setShowModal(true);
        // Scroll to top
        if (gameContainerRef.current) {
          gameContainerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      setMessage(`Réponse: ${answer ? 'Oui' : 'Non'}. Continuez à poser des questions !`);
    }
  };

  // Gère la tentative de deviner le personnage mystère
  const handleGuess = (character) => {
    if (gameStatus !== 'playing') return;

    const correct = isCorrectGuess(character, mysteryCharacter);

    if (correct) {
      setGameStatus('won');
      setMessage(`Bravo ! Vous avez trouvé ${mysteryCharacter.firstName} ${mysteryCharacter.lastName} !`);
      setShowModal(true);
      // Scroll to top
      if (gameContainerRef.current) {
        gameContainerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setGameStatus('lost');
      setMessage(`Dommage ! Le personnage mystère était ${mysteryCharacter.firstName} ${mysteryCharacter.lastName}.`);
      setShowModal(true);
      // Scroll to top
      if (gameContainerRef.current) {
        gameContainerRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Calcule le nombre de personnages restants
  const remainingCount = countRemainingCharacters(gameCharacters);

  return (
    <div className="game-container" ref={gameContainerRef}>
      <Header 
        onRestart={startNewGame} 
        remainingCount={remainingCount} 
        totalCount={characters.length} 
      />

      {/* Modal de fin de partie */}
      {showModal && (
        <div className="game-modal-overlay" onClick={closeModal}>
          <div className="game-modal" onClick={(e) => e.stopPropagation()}>
            <div className={`game-modal-content ${gameStatus}`}>
              <h2>{gameStatus === 'won' ? 'Victoire !' : 'Défaite !'}</h2>
              <p>{message}</p>
              <button className="play-again-button" onClick={startNewGame}>
                Nouvelle partie
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="game-board">
        {/* Message d'état du jeu */}
        <div className={`game-message ${gameStatus !== 'playing' ? gameStatus : ''}`}>
          {message}
          {gameStatus !== 'playing' && (
            <button className="play-again-button" onClick={startNewGame}>
              Rejouer
            </button>
          )}
        </div>

        {/* Grille de personnages */}
        <div className="characters-grid">
          {gameCharacters.map(character => (
            <CharacterCard
              key={character.id}
              character={character}
              onGuess={handleGuess}
              eliminated={character.eliminated}
            />
          ))}
        </div>

        {/* Panneau de questions */}
        <div className="question-panel-container">
          <QuestionPanel
            questions={questions}
            onAskQuestion={handleAskQuestion}
            askedQuestions={askedQuestions}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GameBoard;
