import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { YouloopComponent } from './projets/youloop/youloop.component';
import { Error404Component } from './error404/error404.component';
import { QuiSuisJeComponent } from './qui-suis-je/qui-suis-je.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonModule } from './projets/pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CFFComponent } from './projets/cff/cff.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProjetsComponent,
    YouloopComponent,
    Error404Component,
    QuiSuisJeComponent,
    FooterComponent,
    CFFComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false}),
    PokemonModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
