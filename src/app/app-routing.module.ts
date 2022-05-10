import { LoginComponent } from './login/login.component';
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
  //{ path: "", redirectTo: 'login', pathMatch: 'full'},
  { path: "", redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
