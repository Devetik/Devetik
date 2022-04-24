import { POKEMONS } from './../mock-pokemon-list';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';



@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {

  pokemonList: Pokemon[] = POKEMONS;
  pokemon: Pokemon|undefined;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(){
    this.pokemonList = POKEMONS;
    const pokemonId: string|null = this.route.snapshot.paramMap.get('Id');

    if(pokemonId){
      this.pokemon = this.pokemonList.find(pokemon => pokemon.Id == +pokemonId);
    }

  }

  goBack(){
    this.router.navigate(['projets/pokemon']);
  }

}
