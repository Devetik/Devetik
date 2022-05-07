import { projet } from "./projet";

export const PROJETS: projet[] = [
    {
      title: "Pokemon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      lien: "/projets/pokemon",
      description: "Utilisation du patterne Master View et création d'un mock à partir d'un csv"
    },
    {
      title: "Game of Life",
      image: "https://miro.medium.com/max/1400/1*KMsAE8WmWsPJtxkRaov4Ow.gif",
      lien: "/projets/game-of-life",
      description: "The John Conway's game of life"
    },
    {
      title: "Youloop",
      image: "../assets/Youlooplogo.png",
      lien: "/projets/youloop",
      description: "Prototype pour le projet Youloop"
    },
    {
      title: "The Snake",
      image: "../assets/Snake.svg",
      lien: "/projets/snake",
      description: "Ancien projet portant sur le jeu Snake"
    },
    {
      title: "Horaires CFF",
      image: "https://www.commune-cransmontana.ch/media/image/0/big_16_9/logo-sbb-cff-ffs_596x596px_web.png",
      lien: "/projets/CFF",
      description: "Projet REST avec les horaires des CFF"
    },
    {
      title: "Test projet",
      image: "data:image/png;base64,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",
      lien: "watson",
      description: "juste un test"
    },
    {
      title: "Test projet 2",
      image: "https://www.lerefletdulac.com/wp-content/uploads/sites/29/2019/02/LeRefletduLac.com-recherche-qu%C3%A9bec.jpg",
      lien: "test"
    }

];
