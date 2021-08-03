import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CharacterSheetComponent } from './components/character-sheet/character-sheet.component';
import { HomeComponent } from './components/home/home.component';
import { ModifierPipe } from './pipes/modifier.pipe';
import { DisplayModifierPipe } from './pipes/display-modifier.pipe';
import { CreateCharacterComponent } from './components/create-character/create-character.component';
import { BeginWithPipe } from './pipes/begin-with.pipe';

import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFireFunctions, AngularFireFunctionsModule, REGION } from "@angular/fire/functions"
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    CharacterSheetComponent,
    HomeComponent,
    ModifierPipe,
    DisplayModifierPipe,
    CreateCharacterComponent,
    BeginWithPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
