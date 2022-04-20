import { YouloopComponent } from './projets/youloop/youloop.component';
import { Error404Component } from './error404/error404.component';
import { ProjetsComponent } from './projets/projets.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "projets", component: ProjetsComponent},
  { path: "projets/youloop", component: YouloopComponent},
  { path: "", component: HomeComponent},
  { path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
