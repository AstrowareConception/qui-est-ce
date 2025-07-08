# Qui est-ce ? - Jeu de devinettes

Une version numérique du célèbre jeu "Qui est-ce ?" où vous devez deviner un personnage mystère en posant des questions.

## 📋 Prérequis

- Node.js (version 14 ou supérieure)
- npm ou yarn

## 🚀 Installation

1. Clonez ce dépôt sur votre machine locale
2. Ouvrez un terminal dans le répertoire du projet
3. Installez les dépendances :

```bash
npm install
# ou
yarn
```

## 🎮 Démarrage du jeu

Pour lancer le jeu en mode développement :

```bash
npm run dev
# ou
yarn dev
```

Puis ouvrez votre navigateur à l'adresse indiquée (généralement http://localhost:5173).

## 🏗️ Construction pour la production

Pour construire l'application pour la production :

```bash
npm run build
# ou
yarn build
```

Les fichiers générés seront disponibles dans le répertoire `dist`.

## 🧪 Test de l'application

Pour tester l'application après la construction :

```bash
npm run preview
# ou
yarn preview
```

## 📝 Comment jouer

1. Au lancement du jeu, un personnage mystère est choisi aléatoirement.
2. Posez des questions pour éliminer des personnages qui ne correspondent pas aux caractéristiques du personnage mystère.
3. Lorsque vous pensez avoir identifié le personnage mystère, cliquez sur son portrait.
4. Si vous avez trouvé le bon personnage, vous gagnez ! Sinon, vous perdez et le personnage mystère est révélé.
5. Vous pouvez recommencer une partie à tout moment en cliquant sur le bouton "Nouvelle partie".

## 📁 Structure du projet

- `/public/images` : Contient les images des personnages
- `/src/components` : Composants React du jeu
- `/src/data` : Données JSON des personnages
- `/src/utils` : Fonctions utilitaires pour la logique du jeu

## 🎨 Personnalisation

Pour personnaliser le jeu avec vos propres personnages :

1. Ajoutez les images des personnages dans le dossier `/public/images`
2. Modifiez le fichier `/src/data/characters.json` pour correspondre à vos personnages
3. Assurez-vous que chaque personnage a un identifiant unique et que les chemins des images sont corrects

## ⚠️ Important - Images des personnages

**Avant de lancer le jeu pour la première fois :**

Vous devez ajouter des images pour chaque personnage dans le dossier `/public/images`. Les noms des fichiers doivent correspondre aux chemins spécifiés dans le fichier `characters.json` (par exemple, `id01.png`, `id02.png`, etc.).

Pour un test rapide, vous pouvez utiliser des images placeholder comme celles-ci :
- https://placehold.co/200x200/png?text=Personnage+1
- https://placehold.co/200x200/png?text=Personnage+2
- etc.

Téléchargez ces images et renommez-les selon les identifiants dans le fichier JSON.

## 📄 Licence

Ce projet est sous licence MIT.
