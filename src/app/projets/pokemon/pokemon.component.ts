import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PokemonService } from './pokemon.service';
import { PokemonCSV } from './pokemonCSV';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})
export class PokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;
  pokemonData: any[] = [];

  constructor(private PokemonCSV: PokemonService) {}

  ngOnInit() {
    this.getData();
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[0]);
  }

  selectPokemon(pokemon: Pokemon) {
    console.log(`Vous avec selectionné ${pokemon.Pokemon}`);
  }

  getData() {
    this.PokemonCSV.getInfo().subscribe((data) => {
      const list = data.split('\n');
      console.log(this.pokemonData);
      list.forEach((e) => {
        this.pokemonData.push(e);
      });
    });
  }
}
