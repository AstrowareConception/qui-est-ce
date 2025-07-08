import React from 'react';
import PropTypes from 'prop-types';
import './CharacterCard.css';

/**
 * Composant représentant une carte de personnage dans la grille
 */
const CharacterCard = ({ character, onGuess, eliminated }) => {
  const { firstName, lastName, image } = character;
  
  // Gère le clic sur une carte pour deviner
  const handleClick = () => {
    if (!eliminated) {
      onGuess(character);
    }
  };

  return (
    <div 
      className={`character-card ${eliminated ? 'eliminated' : ''}`}
      onClick={handleClick}
      aria-label={`${firstName} ${lastName}`}
    >
      <div className="character-image-container">
        <img 
          src={image} 
          alt={`${firstName} ${lastName}`} 
          className="character-image"
        />
      </div>
      <div className="character-name">
        {firstName} {lastName}
      </div>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    eliminated: PropTypes.bool
  }).isRequired,
  onGuess: PropTypes.func.isRequired,
  eliminated: PropTypes.bool
};

CharacterCard.defaultProps = {
  eliminated: false
};

export default CharacterCard;