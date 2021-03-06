import { AuthGuard } from './../../auth.guard';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { PokemonService } from './pokemon.service';
import { FormsModule } from '@angular/forms';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';



const pokemonRoutes: Routes = [
  { path: "projets/edit/pokemon/:id", component: EditPokemonComponent, canActivate: [AuthGuard]},
  { path: "projets/pokemon/add", component: AddPokemonComponent},
  { path: "projets/pokemon", component: PokemonComponent},
  { path: "projets/pokemon/:id", component: DetailPokemonComponent}

];

@NgModule({
  declarations: [
    PokemonComponent,
    ListPokemonComponent,
    DetailPokemonComponent,
    BorderCardDirective,
    PokemonTypeColorPipe,
    PokemonFormComponent,
    EditPokemonComponent,
    AddPokemonComponent,
    SearchPokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pokemonRoutes)
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
