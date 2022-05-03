import { Pokemon } from './pokemon';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(types: string): string {

    let color: string;
    let textC: string;

    switch (types) {
      case 'Fire':
        color = 'red lighten-1';
        textC = ' text-white';
        break;
      case 'Water':
        color = 'blue lighten-1';
        textC = ' text-white';
        break;
      case 'Grass':
        color = 'green lighten-1';
        textC = ' text-white';
        break;
      case 'Bug':
        color = 'brown lighten-1';
        textC = ' text-white';
        break;
      case 'Normal':
        color = 'grey lighten-3';
        textC = ' text-black';
        break;
      case 'Flying':
        color = 'blue lighten-3';
        textC = ' text-white';
        break;
      case 'Poison':
        color = 'deep-purple accent-1';
        textC = ' text-white';
        break;
      case 'Ghost':
        color = 'pink lighten-4';
        textC = ' text-black';
        break;
      case 'Psychic':
        color = 'deep-purple darken-2';
        textC = ' text-white';
        break;
      case 'Electric':
        color = 'lime accent-1';
        textC = ' text-black';
        break;
      case 'Fighting':
        color = 'deep-orange';
        textC = ' text-white';
        break;
      default:
        color = 'grey';
        textC = ' text-white';
        break;
    }

    return 'chip ' + color + textC;

  }

}
