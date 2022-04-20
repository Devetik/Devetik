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
      lien: "/projets/youloop"
    },
    {
      title: "The Snake",
      image: "../assets/Snake.svg",
      lien: "/projets/snake"
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
    }
  ]
}
