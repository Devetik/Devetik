import { Component, OnInit } from '@angular/core';
import { PROJETS } from './mock-projets-list';
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
  listeProjets: projet[] = PROJETS;

}
