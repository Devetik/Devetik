import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { projet } from '../projets/projet';
import { PROJETS } from '../projets/mock-projets-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listeProjets: projet[] = PROJETS;
  auth!: AuthService;


  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    //affichage de la liste des projets
    //console.table(this.listeProjets);
    this.auth = this.authService;
  }

  selectProjet(projet: projet) {
    console.log(`Vous avec selectionné ${projet.title}`);
  }
  logout(){
    this.auth.logout();

  }

}
