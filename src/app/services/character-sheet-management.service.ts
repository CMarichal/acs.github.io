import { Injectable } from '@angular/core';
import { testCharacters } from 'data/testCharacters';
import { Character } from 'model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetManagementService {

  characterSheets: Character[] = testCharacters;

  constructor() { }

  getAllCharacterSheets() {
    return this.characterSheets;
  }

  importCharacterSheet(file) {
    
  }

  exportCharacterSheet(character: Character) {
    // export as downloadable JSON
    var content = JSON.stringify(character);
    // var blob = new Blob([content], {type: 'application/json'});
    // return window.URL.createObjectURL(blob);
    var characterSheetBlob = new Blob([content], {type: 'application/json;charset=utf-8'});
    var FileSaver = require('file-saver');
    FileSaver.saveAs(characterSheetBlob, character.name+".json");
    return "";
  }

  getCharacterSheet(id: number) {
    var character= this.characterSheets.find(sheet => sheet.id==id);
    return character;
  }

  saveCharacter(character: Character) {
  }

}
