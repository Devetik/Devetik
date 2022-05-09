import { projet } from "./projet";

export const PROJETS: projet[] = [
    {
      title: "Pokemon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      lien: "/projets/pokemon",
      description: "Utilisation du patterne Master View et création d'un mock à partir d'un csv",
      isBuplic: true
    },
    {
      title: "Game of Life",
      image: "https://miro.medium.com/max/1400/1*KMsAE8WmWsPJtxkRaov4Ow.gif",
      lien: "/projets/game-of-life",
      description: "The John Conway's game of life",
      isBuplic: false
    },
    {
      title: "Youloop",
      image: "../assets/Youlooplogo.png",
      lien: "/projets/youloop",
      description: "Prototype pour le projet Youloop",
      isBuplic: false
    },
    {
      title: "The Snake",
      image: "../assets/Snake.svg",
      lien: "/projets/snake",
      description: "Ancien projet portant sur le jeu Snake",
      isBuplic:false
    },
    {
      title: "Horaires CFF",
      image: "https://www.commune-cransmontana.ch/media/image/0/big_16_9/logo-sbb-cff-ffs_596x596px_web.png",
      lien: "/projets/CFF",
      description: "Projet REST avec les horaires des CFF"
    }

];
