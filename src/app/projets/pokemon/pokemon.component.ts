import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonList = POKEMONS;

  constructor() { }

  ngOnInit()  {
    console.table(this.pokemonList);
    this.selectPokemon('Bulbizarre');
  }

  selectPokemon(pokemonName: string) {
    console.log(`Vous avec selectionné ${pokemonName}`);
  }

}
