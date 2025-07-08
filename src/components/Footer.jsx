import React from 'react';
import './Footer.css';

/**
 * Composant de pied de page de l'application
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="game-footer">
      <div className="footer-content">
        <p>
          Jeu "Qui est-ce ?" - Version numérique {currentYear}
        </p>
        <p className="instructions-link">
          <button 
            className="instructions-button"
            onClick={() => alert("Comment jouer :\n\n1. Un personnage mystère a été choisi aléatoirement\n2. Posez des questions pour éliminer des personnages\n3. Quand vous pensez avoir trouvé, cliquez sur le personnage\n4. Vous pouvez recommencer une partie à tout moment")}
          >
            Comment jouer ?
          </button>
        </p>
      </div>
    </footer>
  );
};

export default Footer;