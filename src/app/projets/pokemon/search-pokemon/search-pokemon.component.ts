
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.scss']
})
export class SearchPokemonComponent implements OnInit {

  searchTerms = new Subject<string>();

  pokemons$: Observable<Pokemon[]> | undefined; //potentiel erreur

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemons$ = this.searchTerms.pipe(
    debounceTime(150),
    distinctUntilChanged(),
    switchMap((term) => this.pokemonService.searchPokemonList(term))
    );
  }

  search(term:string) {
    this.searchTerms.next(term);
  }

  goToDetail(pokemon: Pokemon){
    const link = ['/projets/pokemon', pokemon.id];
    this.router.navigate(link);
  }

}
