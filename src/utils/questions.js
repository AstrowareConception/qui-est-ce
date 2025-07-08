export const questions = [
  // Questions sur le sexe
  {
    id: "isFemale",
    label: "Est-ce que la personne est une femme ?",
    property: "sex",
    expectedValue: "female"
  },
  {
    id: "isMale",
    label: "Est-ce que la personne est un homme ?",
    property: "sex",
    expectedValue: "male"
  },

  // Questions sur les accessoires
  {
    id: "hasGlasses",
    label: "Est-ce que la personne porte des lunettes ?",
    property: "glasses"
  },

  // Questions sur les caractéristiques faciales
  {
    id: "hasBeard",
    label: "Est-ce que la personne a une barbe ?",
    property: "beard"
  },

  // Questions sur les yeux
  {
    id: "hasGreenEyes",
    label: "Est-ce que la personne a les yeux verts ?",
    property: "eyeColor",
    expectedValue: "green"
  },
  {
    id: "hasBrownEyes",
    label: "Est-ce que la personne a les yeux marrons ?",
    property: "eyeColor",
    expectedValue: "brown"
  },

  // Questions sur les cheveux
  {
    id: "hasHair",
    label: "Est-ce que la personne a des cheveux ?",
    property: "hairLength",
    notExpectedValue: "bald"
  },
  {
    id: "isBald",
    label: "Est-ce que la personne est chauve ?",
    property: "hairLength",
    expectedValue: "bald"
  },
  {
    id: "hasBrownHair",
    label: "Est-ce que la personne a les cheveux chatains ?",
    property: "hairColor",
    expectedValue: "brown"
  },
  {
    id: "hasBlondHair",
    label: "Est-ce que la personne a les cheveux blonds ?",
    property: "hairColor",
    expectedValue: "blond"
  },
  {
    id: "hasRedHair",
    label: "Est-ce que la personne a les cheveux roux ?",
    property: "hairColor",
    expectedValue: "red"
  },
  {
    id: "hasBlackHair",
    label: "Est-ce que la personne a les cheveux noirs ?",
    property: "hairColor",
    expectedValue: "black"
  },
  {
    id: "hasLongHair",
    label: "Est-ce que la personne a les cheveux longs ?",
    property: "hairLength",
    expectedValue: "long"
  },
  {
    id: "hasMediumHair",
    label: "Est-ce que la personne a les cheveux mi-longs ?",
    property: "hairLength",
    expectedValue: "medium"
  },
  {
    id: "hasShortHair",
    label: "Est-ce que la personne a les cheveux courts ?",
    property: "hairLength",
    expectedValue: "short"
  },

  // Questions sur la peau
  {
    id: "hasLightSkin",
    label: "Est-ce que la personne a la peau claire ?",
    property: "skinTone",
    expectedValue: "light"
  },
  {
    id: "hasMediumSkin",
    label: "Est-ce que la personne a la peau bronzée ?",
    property: "skinTone",
    expectedValue: "medium"
  },
  {
    id: "hasDarkSkin",
    label: "Est-ce que la personne a la peau foncée ?",
    property: "skinTone",
    expectedValue: "dark"
  },
  {
    id: "hasColoredSkin",
    label: "Est-ce que la personne a la peau colorée (bleue ou rouge) ?",
    property: "skinTone",
    expectedValues: ["blue", "red"]
  },
  {
    id: "hasBlueSkin",
    label: "Est-ce que la personne a la peau bleue ?",
    property: "skinTone",
    expectedValue: "blue"
  },
  {
    id: "hasRedSkin",
    label: "Est-ce que la personne a la peau rouge ?",
    property: "skinTone",
    expectedValue: "red"
  },
  {
    id: "hasRedSkin2",
    label: "Est-ce que la personne est en colère ?",
    property: "skinTone",
    expectedValue: "red"
  },

  // Questions combinées
  {
    id: "hasGlassesAndBeard",
    label: "Est-ce que la personne porte des lunettes et a une barbe ?",
    properties: [
      { property: "glasses", expectedValue: true },
      { property: "beard", expectedValue: true }
    ]
  },
  {
    id: "isMaleWithGlasses",
    label: "Est-ce que la personne est un homme qui porte des lunettes ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "isFemaleWithGlasses",
    label: "Est-ce que la personne est une femme qui porte des lunettes ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "isFemaleWithLongHair",
    label: "Est-ce que la personne est une femme aux cheveux longs ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "hairLength", expectedValue: "long" }
    ]
  },

  // Questions pour différencier les personnes aux cheveux chatains et yeux marrons
  {
    id: "hasBrownHairAndShortHair",
    label: "Est-ce que la personne a les cheveux chatains et courts ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "hairLength", expectedValue: "short" }
    ]
  },
  {
    id: "hasBrownHairAndMediumHair",
    label: "Est-ce que la personne a les cheveux chatains et mi-longs ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "hairLength", expectedValue: "medium" }
    ]
  },
  {
    id: "hasBrownHairAndLongHair",
    label: "Est-ce que la personne a les cheveux chatains et longs ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "hairLength", expectedValue: "long" }
    ]
  },
  {
    id: "hasBrownHairAndGlasses",
    label: "Est-ce que la personne a les cheveux chatains et porte des lunettes ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "hasBrownHairAndBeard",
    label: "Est-ce que la personne a les cheveux chatains et une barbe ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "beard", expectedValue: true }
    ]
  },
  {
    id: "hasBrownEyesAndGlasses",
    label: "Est-ce que la personne a les yeux marrons et porte des lunettes ?",
    properties: [
      { property: "eyeColor", expectedValue: "brown" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "hasBrownEyesAndBeard",
    label: "Est-ce que la personne a les yeux marrons et une barbe ?",
    properties: [
      { property: "eyeColor", expectedValue: "brown" },
      { property: "beard", expectedValue: true }
    ]
  },
  {
    id: "isMaleWithBrownHair",
    label: "Est-ce que la personne est un homme aux cheveux chatains ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "hairColor", expectedValue: "brown" }
    ]
  },
  {
    id: "isFemaleWithBrownHair",
    label: "Est-ce que la personne est une femme aux cheveux chatains ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "hairColor", expectedValue: "brown" }
    ]
  },
  {
    id: "hasBrownHairAndLightSkin",
    label: "Est-ce que la personne a les cheveux chatains et la peau claire ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },

  // Questions plus complexes avec trois attributs
  {
    id: "isMaleWithBrownHairAndGlasses",
    label: "Est-ce que la personne est un homme aux cheveux chatains qui porte des lunettes ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "hairColor", expectedValue: "brown" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "isMaleWithBrownHairAndBeard",
    label: "Est-ce que la personne est un homme aux cheveux chatains qui a une barbe ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "hairColor", expectedValue: "brown" },
      { property: "beard", expectedValue: true }
    ]
  },
  {
    id: "isMaleWithBrownHairAndShortHair",
    label: "Est-ce que la personne est un homme aux cheveux chatains courts ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "hairColor", expectedValue: "brown" },
      { property: "hairLength", expectedValue: "short" }
    ]
  },
  {
    id: "isMaleWithBrownEyesAndGlasses",
    label: "Est-ce que la personne est un homme aux yeux marrons qui porte des lunettes ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "eyeColor", expectedValue: "brown" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "isMaleWithBrownEyesAndBeard",
    label: "Est-ce que la personne est un homme aux yeux marrons qui a une barbe ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "eyeColor", expectedValue: "brown" },
      { property: "beard", expectedValue: true }
    ]
  },
  {
    id: "hasBrownHairAndBrownEyesAndGlasses",
    label: "Est-ce que la personne a les cheveux chatains, les yeux marrons et porte des lunettes ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "eyeColor", expectedValue: "brown" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "hasBrownHairAndBrownEyesAndBeard",
    label: "Est-ce que la personne a les cheveux chatains, les yeux marrons et une barbe ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "eyeColor", expectedValue: "brown" },
      { property: "beard", expectedValue: true }
    ]
  },

  // Questions spécifiques pour les femmes avec des traits communs
  {
    id: "isFemaleWithBrownHairAndGlasses",
    label: "Est-ce que la personne est une femme aux cheveux chatains qui porte des lunettes ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "hairColor", expectedValue: "brown" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "isFemaleWithBrownHairAndLongHair",
    label: "Est-ce que la personne est une femme aux cheveux chatains longs ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "hairColor", expectedValue: "brown" },
      { property: "hairLength", expectedValue: "long" }
    ]
  },
  {
    id: "isFemaleWithBrownHairAndMediumHair",
    label: "Est-ce que la personne est une femme aux cheveux chatains mi-longs ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "hairColor", expectedValue: "brown" },
      { property: "hairLength", expectedValue: "medium" }
    ]
  },
  {
    id: "isFemaleWithBrownEyesAndGlasses",
    label: "Est-ce que la personne est une femme aux yeux marrons qui porte des lunettes ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "eyeColor", expectedValue: "brown" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "isFemaleWithBrownHairAndBrownEyes",
    label: "Est-ce que la personne est une femme aux cheveux chatains et aux yeux marrons ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "hairColor", expectedValue: "brown" },
      { property: "eyeColor", expectedValue: "brown" }
    ]
  },
  {
    id: "isFemaleWithBrownHairAndLightSkin",
    label: "Est-ce que la personne est une femme aux cheveux chatains et à la peau claire ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "hairColor", expectedValue: "brown" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },

  // Questions combinant longueur de cheveux et teinte de peau
  {
    id: "hasShortHairAndLightSkin",
    label: "Est-ce que la personne a les cheveux courts et la peau claire ?",
    properties: [
      { property: "hairLength", expectedValue: "short" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },
  {
    id: "hasMediumHairAndLightSkin",
    label: "Est-ce que la personne a les cheveux mi-longs et la peau claire ?",
    properties: [
      { property: "hairLength", expectedValue: "medium" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },
  {
    id: "hasLongHairAndLightSkin",
    label: "Est-ce que la personne a les cheveux longs et la peau claire ?",
    properties: [
      { property: "hairLength", expectedValue: "long" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },
  {
    id: "hasShortHairAndDarkSkin",
    label: "Est-ce que la personne a les cheveux courts et la peau foncée ?",
    properties: [
      { property: "hairLength", expectedValue: "short" },
      { property: "skinTone", expectedValue: "dark" }
    ]
  },
  {
    id: "hasLongHairAndDarkSkin",
    label: "Est-ce que la personne a les cheveux longs et la peau foncée ?",
    properties: [
      { property: "hairLength", expectedValue: "long" },
      { property: "skinTone", expectedValue: "dark" }
    ]
  },

  // Questions combinant couleur de cheveux et teinte de peau
  {
    id: "hasBlackHairAndLightSkin",
    label: "Est-ce que la personne a les cheveux noirs et la peau claire ?",
    properties: [
      { property: "hairColor", expectedValue: "black" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },
  {
    id: "hasBlackHairAndDarkSkin",
    label: "Est-ce que la personne a les cheveux noirs et la peau foncée ?",
    properties: [
      { property: "hairColor", expectedValue: "black" },
      { property: "skinTone", expectedValue: "dark" }
    ]
  },

  // Questions très spécifiques avec trois attributs
  {
    id: "hasBrownHairAndBrownEyesAndLightSkin",
    label: "Est-ce que la personne a les cheveux chatains, les yeux marrons et la peau claire ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "eyeColor", expectedValue: "brown" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },
  {
    id: "hasBrownHairAndShortHairAndGlasses",
    label: "Est-ce que la personne a les cheveux chatains courts et porte des lunettes ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "hairLength", expectedValue: "short" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "hasBrownHairAndLongHairAndGlasses",
    label: "Est-ce que la personne a les cheveux chatains longs et porte des lunettes ?",
    properties: [
      { property: "hairColor", expectedValue: "brown" },
      { property: "hairLength", expectedValue: "long" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "isMaleWithBrownHairAndLightSkin",
    label: "Est-ce que la personne est un homme aux cheveux chatains et à la peau claire ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "hairColor", expectedValue: "brown" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },
  {
    id: "isMaleWithBrownEyesAndLightSkin",
    label: "Est-ce que la personne est un homme aux yeux marrons et à la peau claire ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "eyeColor", expectedValue: "brown" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },
  {
    id: "isMaleWithShortHairAndGlasses",
    label: "Est-ce que la personne est un homme aux cheveux courts qui porte des lunettes ?",
    properties: [
      { property: "sex", expectedValue: "male" },
      { property: "hairLength", expectedValue: "short" },
      { property: "glasses", expectedValue: true }
    ]
  },
  {
    id: "isFemaleWithBrownEyesAndLightSkin",
    label: "Est-ce que la personne est une femme aux yeux marrons et à la peau claire ?",
    properties: [
      { property: "sex", expectedValue: "female" },
      { property: "eyeColor", expectedValue: "brown" },
      { property: "skinTone", expectedValue: "light" }
    ]
  },

  // Questions sur les voisins
  // Note: Ces questions nécessitent une implémentation spéciale dans GameBoard.jsx et filterCharacters.js
  // pour déterminer les voisins (gauche = carte précédente, droite = carte suivante)
  {
    id: "isLeftNeighborFemale",
    label: "Est-ce que la personne à gauche est une femme ?",
    neighborType: "left",
    property: "sex",
    expectedValue: "female"
  },
  {
    id: "isRightNeighborFemale",
    label: "Est-ce que la personne à droite est une femme ?",
    neighborType: "right",
    property: "sex",
    expectedValue: "female"
  },
  {
    id: "isLeftNeighborMale",
    label: "Est-ce que la personne à gauche est un homme ?",
    neighborType: "left",
    property: "sex",
    expectedValue: "male"
  },
  {
    id: "isRightNeighborMale",
    label: "Est-ce que la personne à droite est un homme ?",
    neighborType: "right",
    property: "sex",
    expectedValue: "male"
  },
  {
    id: "hasLeftNeighborHair",
    label: "Est-ce que la personne à gauche a des cheveux ?",
    neighborType: "left",
    property: "hairLength",
    notExpectedValue: "bald"
  },
  {
    id: "hasRightNeighborHair",
    label: "Est-ce que la personne à droite a des cheveux ?",
    neighborType: "right",
    property: "hairLength",
    notExpectedValue: "bald"
  },
  {
    id: "hasLeftNeighborGlasses",
    label: "Est-ce que la personne à gauche porte des lunettes ?",
    neighborType: "left",
    property: "glasses",
    expectedValue: true
  },
  {
    id: "hasRightNeighborGlasses",
    label: "Est-ce que la personne à droite porte des lunettes ?",
    neighborType: "right",
    property: "glasses",
    expectedValue: true
  },
  {
    id: "hasLeftNeighborBeard",
    label: "Est-ce que la personne à gauche a une barbe ?",
    neighborType: "left",
    property: "beard",
    expectedValue: true
  },
  {
    id: "hasRightNeighborBeard",
    label: "Est-ce que la personne à droite a une barbe ?",
    neighborType: "right",
    property: "beard",
    expectedValue: true
  },
  {
    id: "bothNeighborsHaveGlasses",
    label: "Est-ce que les personnes à gauche et à droite portent des lunettes ?",
    neighborType: "both",
    property: "glasses",
    expectedValue: true
  },
  {
    id: "bothNeighborsHaveHair",
    label: "Est-ce que les personnes à gauche et à droite ont des cheveux ?",
    neighborType: "both",
    property: "hairLength",
    notExpectedValue: "bald"
  },
  {
    id: "bothNeighborsAreMale",
    label: "Est-ce que les personnes à gauche et à droite sont des hommes ?",
    neighborType: "both",
    property: "sex",
    expectedValue: "male"
  },
  {
    id: "bothNeighborsAreFemale",
    label: "Est-ce que les personnes à gauche et à droite sont des femmes ?",
    neighborType: "both",
    property: "sex",
    expectedValue: "female"
  },
  {
    id: "leftNeighborHasBrownHair",
    label: "Est-ce que la personne à gauche a les cheveux chatains ?",
    neighborType: "left",
    property: "hairColor",
    expectedValue: "brown"
  },
  {
    id: "rightNeighborHasBrownHair",
    label: "Est-ce que la personne à droite a les cheveux chatains ?",
    neighborType: "right",
    property: "hairColor",
    expectedValue: "brown"
  },
  {
    id: "leftNeighborHasBrownEyes",
    label: "Est-ce que la personne à gauche a les yeux marrons ?",
    neighborType: "left",
    property: "eyeColor",
    expectedValue: "brown"
  },
  {
    id: "rightNeighborHasBrownEyes",
    label: "Est-ce que la personne à droite a les yeux marrons ?",
    neighborType: "right",
    property: "eyeColor",
    expectedValue: "brown"
  }
];
