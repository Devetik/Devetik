import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-pokemon',
  templateUrl: './add-pokemon.component.html',
  styleUrls: ['./add-pokemon.component.scss']
})
export class AddPokemonComponent implements OnInit {

  pokemon!: Pokemon;


  alea = Math.floor(Math.random() * (152 - 1 + 1)) + 1;

  zero = ('0' + this.alea).slice(-3);

  ngOnInit() {
    this.pokemon = new Pokemon();

    console.log(this.alea);
    console.log(this.zero);
  }

}
