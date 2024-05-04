import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HttpClientModule } from '@angular/common/http';
import { InfosCharacterListComponent } from './components/infos-character-list/infos-character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    InfosCharacterListComponent
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
