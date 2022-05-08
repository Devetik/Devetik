import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonModule } from './pokemon.module';
import { PokemonService } from './pokemon.service';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
})

export class PokemonComponent implements OnInit {
  pokemonList: Pokemon[] = [];

  constructor(private router: Router, private pokemonService: PokemonService) {}

  goToPokemon(pokemon: Pokemon){
    this.router.navigate(['projets/pokemon', pokemon.id]);
  }

  ngOnInit() {
    this.pokemonService.getPokemonList().subscribe(pokemonList => this.pokemonList = pokemonList);
  }


}
