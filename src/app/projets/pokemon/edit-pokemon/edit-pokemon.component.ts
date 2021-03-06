import { PokemonService } from './../pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-edit-pokemon',
  templateUrl: './edit-pokemon.component.html',
  styleUrls: ['../detail-pokemon/detail-pokemon.component.scss', './edit-pokemon.component.scss']
})
export class EditPokemonComponent implements OnInit {

  pokemon: Pokemon | undefined;

  constructor(
    private route: ActivatedRoute,
    private PokemonService: PokemonService
  ) { }

  ngOnInit() {
    const pokemonId: string|null = this.route.snapshot.paramMap.get('id');
    if(pokemonId){
      this.PokemonService.getPokemonById(+pokemonId).subscribe(pokemon => this.pokemon = pokemon);
    } else {
      this.pokemon = undefined;
    }
  }

}
