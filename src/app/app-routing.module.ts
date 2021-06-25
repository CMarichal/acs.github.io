import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [      
  { path: '', component: HomeComponent},
  { path: 'create-character', component: CreateCharacterComponent},
  { path: 'character-sheet/:id', component: CharacterSheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
