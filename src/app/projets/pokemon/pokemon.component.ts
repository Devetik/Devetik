import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;


  constructor() {}

  ngOnInit() {

    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avec selectionné ${pokemon.Pokemon}`);
  }

}
