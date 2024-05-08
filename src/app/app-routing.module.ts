import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterinfosComponent } from './pages/characterinfos/characterinfos.component';
import { HomeComponent } from './pages/home/home.component';
import { PlanetsComponent } from './pages/planets/planets.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'characters', component:CharactersComponent},
  {path:'characterinfo/:id', component:CharacterinfosComponent},
  {path:'planets', component:PlanetsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
