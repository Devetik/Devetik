import { POKEMONS } from './../mock-pokemon-list';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form.component.scss','../detail-pokemon/detail-pokemon.component.scss']
})
export class PokemonFormComponent implements OnInit {
  @Input()
  //retirer le ! pour debug
  pokemon!: Pokemon;

  types: string[] = [];
  isAddForm!: boolean;


  //zero = Math.floor(Math.random() * (905 - 1 + 1)) + 1;

  alea = (('0' + (Math.floor(Math.random() * (905 - 1 + 1)) + 1)).slice(-3)) + ".png";

  constructor(
    private pokemonService: PokemonService,
    private router: Router
    ) { }

  ngOnInit() {
    this.types = this.pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add');
    if(this.isAddForm){
      const nbrPKM: number = POKEMONS.length;
      const nbrPKM2 = POKEMONS[nbrPKM - 1].id;
      this.pokemon.id = nbrPKM2 + 1;
      //this.pokemon.id = +POKEMONS[POKEMONS.length + 1 ];
      //console.log(this.pokemon.id);
      console.log(nbrPKM2);
      this.alea = (('0' + (Math.floor(Math.random() * (905 - 1 + 1)) + 1)).slice(-3)) + ".png";
      if(this.alea.length < 7) {
        //this.zero = Math.floor(Math.random() * (905 - 1 + 1)) + 1;
        this.alea = (('0' + (Math.floor(Math.random() * (905 - 1 + 1)) + 1)).slice(-3)) + ".png";
      }
      this.pokemon.PNGHD = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + this.alea;
    }

  }

  hasType(type: string): boolean{
    return this.pokemon.types.includes(type);
  }

  selectType($event: Event, type: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      this.pokemon.types.splice(index, 1);
    }

  }
  randomPNG(){
    //this.zero = Math.floor(Math.random() * (905 - 1 + 1)) + 1;
    this.alea = (('0' + (Math.floor(Math.random() * (905 - 1 + 1)) + 1)).slice(-3)) + ".png";
    if(this.alea.length < 7) {
      //this.zero = Math.floor(Math.random() * (905 - 1 + 1)) + 1;
      this.alea = (('0' + (Math.floor(Math.random() * (905 - 1 + 1)) + 1)).slice(-3)) + ".png";
    }
    this.pokemon.PNGHD = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' + this.alea;
    console.log(this.alea);
    console.log(this.alea.length);
  }

  isTypesValid(types: string): boolean{
    if(this.pokemon.types.length == 1 && this.hasType(types)){
      return false;
    }

    if(this.pokemon.types.length >= 2 && !this.hasType(types)) {
      return false;
    }

    return true;
  }

  onSubmit(){

    if(this.isAddForm) {

      this.pokemon.PNG = this.pokemon.PNGHD;
      this.pokemon.GIF = this.pokemon.PNGHD;
      //this.pokemon.id = 188;

      this.pokemonService.addPokemon(this.pokemon)
      .subscribe((pokemon: Pokemon) => this.router.navigate(['/projets/pokemon', pokemon.id]));
    } else {
      this.pokemonService.updatePokemon(this.pokemon)
      .subscribe(() => this.router.navigate(['/projets/pokemon', this.pokemon.id]));
    }
    this.pokemonService.updatePokemon(this.pokemon)
    .subscribe(() => this.router.navigate(['projets/pokemon', this.pokemon.id]));
    //this.router.navigate(['/projets/pokemon', this.pokemon.id]);
  }

}
