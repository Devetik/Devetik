import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.scss']
})
export class ListPokemonComponent implements OnInit{

  pokemonList: Pokemon[] = [];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  ngOnInit(){
    this.pokemonList = this.pokemonService.getPokemonList();
  }

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['projets/pokemon', pokemon.id]);
  }
}
