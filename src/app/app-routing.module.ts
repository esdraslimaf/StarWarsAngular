import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterinfosComponent } from './components/characterinfos/characterinfos.component';

const routes: Routes = [
  {path:'', component:CharactersComponent},
  {path:'characterinfo/:id', component:CharacterinfosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
