import { Injectable } from '@angular/core';
import { testCharacters } from 'data/testCharacters';
import { Character } from 'model/character';
import { Race } from 'model/race';
import { Job } from 'model/job';
import { RulesService } from './rules.service';
import { CharacterAbility } from 'model/abilities';
import { FirebaseService } from './firebase.service';
import { ItemManagement } from 'model/item';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterSheetManagementService {

  characterSheets: Character[] = testCharacters;

  constructor(
    private rulesService: RulesService,
    private firebaseService: FirebaseService
    ) { }

    /**
     * Retrieve all characters
     * @returns 
     */
  getAllCharacterSheets() : Observable<Character[]> {
    return this.firebaseService.db.list<Character>('character-sheets').valueChanges();
  }

  /**
   *  Create a new character and save it
   * @param name 
   * @param race 
   * @param job 
   * @returns created character
   */
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
    this.saveCharacter(newCharacter);

    return newCharacter;
  }

  importCharacterSheet(character: Character) {
    this.characterSheets.push(character);
    this.saveCharacter(character);
  }

  /**
   * Export a character as a JSON file
   * @param character 
   */
  exportCharacterSheet(character: Character) {
    // export as downloadable JSON
    var content = JSON.stringify(character);
    var characterSheetBlob = new Blob([content], {type: 'application/json;charset=utf-8'});
    var FileSaver = require('file-saver');
    FileSaver.saveAs(characterSheetBlob, character.name+".json");
  }

  /**
   * Get a character by its id as an Observable
   * @param id 
   * @returns character
   */
  getCharacterSheet(id: number) : Observable<Character> {
    // look for a character sheet in database
    //var character: Character= this.characterSheets.find(sheet => sheet.id==id);
    var character = this.firebaseService.db.object<Character>('character-sheets/'+id).valueChanges();

    // look for the character sheet in session storage
    if (character == undefined) {
      let characterString = sessionStorage.getItem(String(id));
      if (characterString != null) {
        character = JSON.parse(characterString)
      }
    }

    return character;
  }

  /**
   * Send a character to the database
   * @param character 
   */
  saveCharacter(character: Character) {
    sessionStorage.setItem(String(character.id), JSON.stringify(character));

    this.firebaseService.db.object('character-sheets/'+character.id).update(character);
  }


}
