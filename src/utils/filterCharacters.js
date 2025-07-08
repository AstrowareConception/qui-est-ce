/**
 * Filtre les personnages en fonction de la question posée et du personnage mystère
 * @param {Array} characters - Liste des personnages
 * @param {Object} mysteryCharacter - Le personnage mystère
 * @param {Object} question - La question posée
 * @returns {Array} - Liste des personnages mise à jour avec les personnages éliminés marqués
 */
export function filterCharacters(characters, mysteryCharacter, question) {
  // Détermine si la réponse à la question est "oui" pour le personnage mystère
  let isMatch = false;

  // Trouve l'index du personnage mystère dans le tableau des personnages
  const mysteryIndex = characters.findIndex(char => char.id === mysteryCharacter.id);

  // Gestion des questions sur les voisins
  if (question.neighborType) {
    // Gestion des questions sur le voisin de gauche
    if (question.neighborType === "left") {
      // Vérifie si le personnage mystère a un voisin de gauche
      if (mysteryIndex > 0) {
        const leftNeighbor = characters[mysteryIndex - 1];

        // Vérifie la propriété du voisin de gauche
        if (question.notExpectedValue) {
          isMatch = leftNeighbor[question.property] !== question.notExpectedValue;
        } else {
          isMatch = question.expectedValue !== undefined
            ? leftNeighbor[question.property] === question.expectedValue
            : leftNeighbor[question.property] === true;
        }
      } else {
        // Pas de voisin de gauche, la réponse est toujours "non"
        isMatch = false;
      }
    }
    // Gestion des questions sur le voisin de droite
    else if (question.neighborType === "right") {
      // Vérifie si le personnage mystère a un voisin de droite
      if (mysteryIndex < characters.length - 1) {
        const rightNeighbor = characters[mysteryIndex + 1];

        // Vérifie la propriété du voisin de droite
        if (question.notExpectedValue) {
          isMatch = rightNeighbor[question.property] !== question.notExpectedValue;
        } else {
          isMatch = question.expectedValue !== undefined
            ? rightNeighbor[question.property] === question.expectedValue
            : rightNeighbor[question.property] === true;
        }
      } else {
        // Pas de voisin de droite, la réponse est toujours "non"
        isMatch = false;
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
        isMatch = leftMatch && rightMatch;
      } else {
        // S'il manque un voisin, la réponse est toujours "non"
        isMatch = false;
      }
    }
  }
  // Gestion des questions avec plusieurs propriétés (questions combinées)
  else if (question.properties) {
    // Toutes les propriétés doivent correspondre pour que la réponse soit "oui"
    isMatch = question.properties.every(propObj => {
      const { property, expectedValue } = propObj;
      const mysteryValue = mysteryCharacter[property];
      return expectedValue === mysteryValue;
    });
  } 
  // Gestion des questions avec un tableau de valeurs attendues
  else if (question.expectedValues) {
    const { property, expectedValues } = question;
    const mysteryValue = mysteryCharacter[property];
    isMatch = expectedValues.includes(mysteryValue);
  }
  // Gestion des questions avec une valeur non attendue
  else if (question.notExpectedValue) {
    const { property, notExpectedValue } = question;
    const mysteryValue = mysteryCharacter[property];
    isMatch = mysteryValue !== notExpectedValue;
  }
  // Gestion des questions standard
  else {
    const { property, expectedValue } = question;
    const mysteryValue = mysteryCharacter[property];
    isMatch = expectedValue !== undefined
      ? mysteryValue === expectedValue
      : mysteryValue === true;
  }

  // Met à jour la liste des personnages en marquant ceux qui sont éliminés
  return characters.map((character, index) => {
    // Si le personnage est déjà éliminé, il reste éliminé
    if (character.eliminated) {
      return character;
    }

    // Sinon, on vérifie s'il doit être éliminé en fonction de la question
    let shouldKeep = false;

    // Gestion des questions sur les voisins
    if (question.neighborType) {
      // Pour les questions sur les voisins, on vérifie si le personnage actuel
      // pourrait être le personnage mystère en fonction de ses voisins

      // Gestion des questions sur le voisin de gauche
      if (question.neighborType === "left") {
        // Vérifie si le personnage a un voisin de gauche
        if (index > 0) {
          const leftNeighbor = characters[index - 1];

          // Vérifie la propriété du voisin de gauche
          if (question.notExpectedValue) {
            shouldKeep = leftNeighbor[question.property] !== question.notExpectedValue;
          } else {
            shouldKeep = question.expectedValue !== undefined
              ? leftNeighbor[question.property] === question.expectedValue
              : leftNeighbor[question.property] === true;
          }
        } else {
          // Pas de voisin de gauche, ne peut pas être le personnage mystère si la réponse est "oui"
          shouldKeep = false;
        }
      }
      // Gestion des questions sur le voisin de droite
      else if (question.neighborType === "right") {
        // Vérifie si le personnage a un voisin de droite
        if (index < characters.length - 1) {
          const rightNeighbor = characters[index + 1];

          // Vérifie la propriété du voisin de droite
          if (question.notExpectedValue) {
            shouldKeep = rightNeighbor[question.property] !== question.notExpectedValue;
          } else {
            shouldKeep = question.expectedValue !== undefined
              ? rightNeighbor[question.property] === question.expectedValue
              : rightNeighbor[question.property] === true;
          }
        } else {
          // Pas de voisin de droite, ne peut pas être le personnage mystère si la réponse est "oui"
          shouldKeep = false;
        }
      }
      // Gestion des questions sur les deux voisins
      else if (question.neighborType === "both") {
        // Vérifie si le personnage a des voisins des deux côtés
        const hasLeftNeighbor = index > 0;
        const hasRightNeighbor = index < characters.length - 1;

        if (hasLeftNeighbor && hasRightNeighbor) {
          const leftNeighbor = characters[index - 1];
          const rightNeighbor = characters[index + 1];

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
          shouldKeep = leftMatch && rightMatch;
        } else {
          // S'il manque un voisin, ne peut pas être le personnage mystère si la réponse est "oui"
          shouldKeep = false;
        }
      }
    }
    // Gestion des questions avec plusieurs propriétés
    else if (question.properties) {
      shouldKeep = question.properties.every(propObj => {
        const { property, expectedValue } = propObj;
        return character[property] === expectedValue;
      });
    }
    // Gestion des questions avec un tableau de valeurs attendues
    else if (question.expectedValues) {
      const { property, expectedValues } = question;
      shouldKeep = expectedValues.includes(character[property]);
    }
    // Gestion des questions avec une valeur non attendue
    else if (question.notExpectedValue) {
      const { property, notExpectedValue } = question;
      shouldKeep = character[property] !== notExpectedValue;
    }
    // Gestion des questions standard
    else {
      const { property, expectedValue } = question;
      shouldKeep = expectedValue !== undefined
        ? character[property] === expectedValue
        : character[property] === true;
    }

    // Si la réponse est "non", on garde les personnages qui ne correspondent pas
    // Si la réponse est "oui", on garde les personnages qui correspondent
    const shouldBeEliminated = isMatch ? !shouldKeep : shouldKeep;

    return {
      ...character,
      eliminated: shouldBeEliminated
    };
  });
}

/**
 * Vérifie si un personnage correspond au personnage mystère
 * @param {Object} character - Le personnage à vérifier
 * @param {Object} mysteryCharacter - Le personnage mystère
 * @returns {boolean} - True si le personnage correspond au personnage mystère
 */
export function isCorrectGuess(character, mysteryCharacter) {
  return character.id === mysteryCharacter.id;
}

/**
 * Compte le nombre de personnages non éliminés
 * @param {Array} characters - Liste des personnages
 * @returns {number} - Nombre de personnages non éliminés
 */
export function countRemainingCharacters(characters) {
  return characters.filter(character => !character.eliminated).length;
}
