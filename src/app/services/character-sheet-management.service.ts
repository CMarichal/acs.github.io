import { Injectable } from '@angular/core';
import { testCharacters } from 'data/testCharacters';
import { Character } from 'model/character';
import {Router} from "@angular/router"
import { Race, Races } from 'model/race';
import { Job, Jobs } from 'model/job';


@Injectable({
  providedIn: 'root'
})
export class CharacterSheetManagementService {

  characterSheets: Character[] = testCharacters;

  constructor(private router: Router) { }

  getAllCharacterSheets() {
    return this.characterSheets;
  }

  createCharacter(name:string, race: Race, job: Job): Character {
    var newCharacter = new Character(name, race, job);
    this.characterSheets.push(newCharacter);
    return newCharacter;
  }

  importCharacterSheet(character: Character) {
    this.characterSheets.push(character);
  }

  exportCharacterSheet(character: Character) {
    // export as downloadable JSON
    var content = JSON.stringify(character);
    var characterSheetBlob = new Blob([content], {type: 'application/json;charset=utf-8'});
    var FileSaver = require('file-saver');
    FileSaver.saveAs(characterSheetBlob, character.name+".json");
  }

  getCharacterSheet(id: number) {
    var character= this.characterSheets.find(sheet => sheet.id==id);
    return character;
  }

  saveCharacter(character: Character) {
  }

}
