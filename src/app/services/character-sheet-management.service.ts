import { Injectable } from '@angular/core';
import { testCharacters } from 'data/testCharacters';
import { Character } from 'model/character';
import {Router} from "@angular/router"
import { Race, Races } from 'model/race';
import { Job, Jobs } from 'model/job';
import { RulesService } from './rules.service';
import { CharacterAbility } from 'model/abilities';


@Injectable({
  providedIn: 'root'
})
export class CharacterSheetManagementService {

  characterSheets: Character[] = testCharacters;

  constructor(
    private router: Router,
    private rulesService: RulesService
    ) { }

  getAllCharacterSheets() {
    return this.characterSheets;
  }

  createCharacter(name:string, race: Race, job: Job): Character {
    var newCharacter = new Character(name, race, job);

    for (let ability of this.rulesService.getAbilitiesCommonsList())
    {
      newCharacter.abilitiesCommon.push(new CharacterAbility(ability));
    }
    for (let ability of race.abilities)
    {
      newCharacter.abilitiesRace.push(new CharacterAbility(ability));
    }
    for (let ability of job.abilities)
    {
      newCharacter.abilitiesJob.push(new CharacterAbility(ability));
    }
    newCharacter.abilitiesCommon[0].isUnlocked = true;
    newCharacter.abilitiesJob[0].isUnlocked = true;
    newCharacter.abilitiesRace[0].isUnlocked = true;

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
