import { CFFComponent } from './projets/cff/cff.component';
import { QuiSuisJeComponent } from './qui-suis-je/qui-suis-je.component';
import { YouloopComponent } from './projets/youloop/youloop.component';
import { Error404Component } from './error404/error404.component';
import { ProjetsComponent } from './projets/projets.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "projets", component: ProjetsComponent},
  { path: "quiSuisJe", component: QuiSuisJeComponent},
  { path: "projets/youloop", component: YouloopComponent},
  { path: "projets/CFF", component: CFFComponent},
  // { path: "projets/pokemon", component: PokemonComponent},
  // { path: "projets/pokemon/:Id", component: DetailPokemonComponent},
  { path: "", component: HomeComponent},
  { path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
