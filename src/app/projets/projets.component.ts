import { Component, OnInit } from '@angular/core';
import { projet } from './projet';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  listeProjets: projet[] = [
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
      title: "pokemon",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
      lien: "/projets/pokemon",
      description: "Projet portant sur les services d'Angular"
    },
    {
      title: "Youloop",
      image: "../assets/404.png",
      lien: "/projets/youloop"
    },
    {
      title: "Youloop",
      image: "../assets/Youlooplogo.png",
      lien: "/projets/youloop"
    },
    {
      title: "Youloop",
      image: "../assets/Snake.svg",
      lien: "/projets/youloop"
    },
    {
      title: "Youloop",
      image: "../assets/CryptoHover.svg",
      lien: "/projets/youloop"
    },
    {
      title: "Youloop",
      image: "../assets/404.png",
      lien: "/projets/youloop"
    },
    {
      title: "Emma Watson",
      image: "https://resize-elle.ladmedia.fr/r/625,,forcex/crop/625,437,center-middle,forcex,ffffff/img/var/plain_site/storage/images/people/la-vie-des-people/news/emma-watson-designee-femme-la-plus-remarquable-de-l-annee-2938174/53980890-1-fre-FR/Emma-Watson-designee-femme-la-plus-remarquable-de-l-annee.jpg",
      lien: "",
      description: "juste un test"
    }
  ]
}
