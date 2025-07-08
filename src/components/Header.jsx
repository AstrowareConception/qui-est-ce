import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

/**
 * Composant d'en-tête de l'application
 */
const Header = ({ onRestart, remainingCount, totalCount }) => {
  return (
    <header className="game-header">
      <h1>Qui est-ce ?</h1>
      
      <div className="header-info">
        <div className="remaining-characters">
          Personnages restants: <span className="count">{remainingCount}</span> / {totalCount}
        </div>
        
        <button 
          className="restart-button"
          onClick={onRestart}
          aria-label="Recommencer la partie"
        >
          Nouvelle partie
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  onRestart: PropTypes.func.isRequired,
  remainingCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired
};

export default Header;