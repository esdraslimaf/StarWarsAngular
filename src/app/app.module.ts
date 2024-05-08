import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { InfosCharacterListComponent } from './components/infos-character-list/infos-character-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CharacterinfosComponent } from './pages/characterinfos/characterinfos.component';
import { PlanetsComponent } from './pages/planets/planets.component';
import { CardplanetsComponent } from './components/cardplanets/cardplanets.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    InfosCharacterListComponent,
    HomeComponent,
    NavbarComponent,
    CharacterinfosComponent,
    PlanetsComponent,
    CardplanetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
