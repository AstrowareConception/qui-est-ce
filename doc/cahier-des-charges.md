
## 🎯 Objectif du projet

Créer une version numérique du jeu **"Qui est-ce ?"**, où les joueurs doivent deviner une personne parmi un groupe en posant des questions fermées. Le jeu utilisera des **illustrations personnalisées** représentant les membres d'une association, ainsi que des caractéristiques stockées dans un **fichier JSON local**.

---

## 🧩 Fonctionnalités attendues

### 1. Démarrage du jeu

* Au lancement de la partie, **le système choisit aléatoirement une personne** parmi les membres comme **"personne mystère"**.
* Tous les visages sont affichés à l’écran dans une grille.

### 2. Interface utilisateur

* Affichage d’une **grille de portraits** représentant tous les membres.
* Affichage d’un **panneau de questions fermées** (type "oui/non").
* Affichage du **nombre de visages encore en jeu**.
* Possibilité pour l’utilisateur de poser une question à chaque tour.
* Affichage dynamique des visages restants après chaque réponse.
* Option "Je devine !" pour tenter de deviner directement la personne mystère.
* Message de victoire ou d’échec.

### 3. Questions possibles (exemples à étendre)

* Est-ce que la personne est une femme ?
* Porte-t-elle des lunettes ?
* A-t-elle une barbe ?
* A-t-elle les cheveux longs ?
* A-t-elle les yeux bleus ?
* A-t-elle la peau claire ?
* Etc.

### 4. Élimination des visages

* En fonction de la réponse à chaque question, éliminer automatiquement les visages qui ne correspondent pas au critère.
* Les portraits éliminés doivent être visuellement atténués (grisés, barrés, ou floutés).

---

## 🔧 Spécifications techniques

### 1. Stack technique

* **Frontend uniquement** : React (créé avec Vite ou Create React App).
* **Aucun backend**.
* **Toutes les données et images sont locales.**
* **Aucun appel réseau externe**.

### 2. Arborescence projet recommandée

```
/public
  /images
    - id01.png
    - id02.png
    ...

/src
  /components
    - GameBoard.jsx
    - QuestionPanel.jsx
    - CharacterCard.jsx
    - Header.jsx
    - Footer.jsx

  /data
    - characters.json

  /utils
    - filterCharacters.js
    - questions.js

  App.jsx
  main.jsx
```

### 3. Format du fichier `characters.json`

```json
[
  {
    "id": "id01",
    "firstName": "Alice",
    "lastName": "Dupont",
    "sex": "female",
    "glasses": true,
    "beard": false,
    "eyeColor": "green",
    "hairColor": "brown",
    "hairLength": "long",
    "skinTone": "light",
    "image": "/images/id01.png"
  },
  {
    "id": "id02",
    "firstName": "Marc",
    "lastName": "Durand",
    "sex": "male",
    "glasses": false,
    "beard": true,
    "eyeColor": "blue",
    "hairColor": "blond",
    "hairLength": "short",
    "skinTone": "medium",
    "image": "/images/id02.png"
  }
  // ...
]
```

### 4. Exemple d’entrée dans `questions.js`

```js
export const questions = [
  {
    id: "hasBeard",
    label: "Est-ce que la personne a une barbe ?",
    property: "beard"
  },
  {
    id: "hasGlasses",
    label: "Est-ce que la personne porte des lunettes ?",
    property: "glasses"
  },
  {
    id: "isFemale",
    label: "Est-ce une femme ?",
    property: "sex",
    expectedValue: "female"
  },
  {
    id: "hasBlueEyes",
    label: "Est-ce que la personne a les yeux bleus ?",
    property: "eyeColor",
    expectedValue: "blue"
  }
];
```

---

## 🔄 Comportement du jeu

1. **Initialisation** :

    * Charger le JSON et les images.
    * Choisir une personne mystère aléatoirement.
    * Afficher tous les visages.

2. **Pose de question** :

    * L’utilisateur clique sur une question.
    * Le moteur évalue la réponse selon la "personne mystère".
    * Tous les personnages **ne correspondant pas** à la réponse sont marqués comme éliminés.

3. **Fin de partie** :

    * Si l’utilisateur tente une supposition : message "Gagné !" ou "Perdu" selon le résultat.
    * Si un seul visage reste, proposer automatiquement de deviner.

---

## 🧠 Règles de filtrage (dans `filterCharacters.js`)

```js
export function filterCharacters(characters, mysteryCharacter, question) {
  const { property, expectedValue } = question;
  const mysteryValue = mysteryCharacter[property];

  const isMatch = expectedValue !== undefined
    ? mysteryValue === expectedValue
    : mysteryValue === true;

  return characters.map(c => ({
    ...c,
    eliminated: expectedValue !== undefined
      ? (c[property] !== expectedValue) !== isMatch
      : (c[property] !== true) !== isMatch
  }));
}
```

---

## 🖼️ UI/UX

* **Responsive** : grille adaptative.
* **Portraits cliquables** pour deviner.
* **Question panel latéral ou en haut**.
* Animation légère pour suppression d’un visage.
* Message d’aide, instructions affichées au début.

---

## ✅ À faire côté Junie

Junie devra :

* Utiliser React (et potentiellement TypeScript).
* Implémenter un composant central `<GameBoard>` pour gérer la logique.
* Utiliser `useState` pour suivre :

    * La personne mystère
    * La liste de personnages visibles
    * Les questions posées
* Implémenter des composants réutilisables (`CharacterCard`, `QuestionPanel`, etc).
* Intégrer les images dans `/public/images/` et les appeler dynamiquement.
* Afficher un message d’état à chaque étape.
* Permettre la relance de la partie sans recharger la page.

---

## ✨ Fonctionnalités optionnelles (pour une V2)

* **Historique des questions posées**.
* **Mode 2 joueurs local**.
* **Thème sombre**.
* **Animation sonore / effets visuels**.
* **Timer ou nombre de tentatives limité**.

---
