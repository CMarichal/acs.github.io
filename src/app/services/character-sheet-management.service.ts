import { Injectable } from '@angular/core';
import { Character } from 'model/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterSheetManagementService {

  characterSheets: Character[] = [];

  constructor() { }

  getAllCharacterSheets() {
    return this.characterSheets;
  }

  exportCharacterSheet(character: Character) {
    // export as downloadable JSON
    var content = JSON.stringify(character);
    var blob = new Blob([content], {type: 'application/json'});
    return window.URL.createObjectURL(blob);
  }

  getCharacterSheet(id: number) {
    return this.characterSheets.find(sheet => id==sheet.id);
  }

  saveCharacter(character: Character) {
  }

}
