import { Injectable } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  getPokemonList(): Pokemon[] {
    return POKEMONS;
  }

  getPokemonById(pokemonId: number): Pokemon | undefined {
    return POKEMONS.find(pokemon => pokemon.Id == pokemonId);
  }

  getPokemonTypeList(): string[] {
    return [
      "Fire",
      "Water",
      "Grass",
      "Bug",
      "Normal",
      "Flying",
      "Poison",
      "Ghost",
      "Psychic",
      "Electric",
      "Fighting"
    ];
  }
}