import { POKEMONS } from './../mock-pokemon-list';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent{

  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['projets/pokemon', pokemon.Id]);
  }
}
