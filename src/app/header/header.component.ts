import { Component, OnInit } from '@angular/core';
import { projet } from '../projets/projet';
import { PROJETS } from '../projets/mock-projets-list';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listeProjets: projet[] = PROJETS;


  constructor() { }

  ngOnInit(): void {
    //affichage de la liste des projets
    console.table(this.listeProjets);
  }

}
