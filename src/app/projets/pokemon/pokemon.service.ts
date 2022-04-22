import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonData = 'https://gist.githubusercontent.com/santiagoolivar2017/0591a53c4dd34ecd8488660c7372b0e3/raw/4be104b8bc8876acd15f8e21f1c5945f10e3aa1e/Pokemon-description-image.csv';

  constructor(private http:HttpClient) { }

  getInfo() {
    return this.http.get(this.pokemonData, {responseType: 'text'});
    }
}
