import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonModule } from './pokemon.module';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})

export class PokemonComponent implements OnInit {
  pokemonList: Pokemon[] = POKEMONS;

  constructor(private router: Router) {}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['projets/pokemon', pokemon.id]);
  }

  ngOnInit() {

  }


}
