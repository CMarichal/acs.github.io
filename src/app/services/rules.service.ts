import { Injectable } from '@angular/core';
import { Race, Races } from 'model/race';
import { Job, Jobs } from 'model/job';
import { Character } from 'model/character';
import { Stats, SimpleStats } from 'model/stats';
import { MaterialCommons } from 'data/materialsBDD';
import { AbilitiesCommons, Ability, CharacterAbility } from 'model/abilities';
import { FirebaseService } from './firebase.service';
import { ItemManagement } from 'model/item';
import { Observable } from 'rxjs';
import { AngularFireList } from '@angular/fire/database';
import { exception } from 'console';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  racesList = Races.RacesList;
  jobsList = Jobs.JobList;
  materialList = MaterialCommons.MaterialList;
  abilitiesCommonsList = AbilitiesCommons.ABILITY_C_LIST;

  constructor(
    private firebaseService: FirebaseService
  ) { }

  getRacesList(): Race[]
  {
    return this.racesList;
  }
  getJobsList(): Job[]
  {
    return this.jobsList;
  }
  // getMaterialsList()
  // {
  //   return this.materialList;
  // }
  getAbilitiesCommonsList(): Ability[]
  {
    return this.abilitiesCommonsList;
  }

  getMaterialsList() {
    return this.materialList;
  }


  /** get all the linked abilities on the ability graph
      is aware of the unidirectional problem
   * 
   * @param character 
   * @param ability 
   * @returns 
   */
  private getAllLinkedAbilities(character:Character, ability: CharacterAbility): CharacterAbility[] {
    var totalAbilities = [character.abilitiesCommon, character.abilitiesJob, character.abilitiesRace];

    var linkedAbilities: CharacterAbility[] = [];

    for (var abilityList of totalAbilities)
    {
      for (var otherAbility of abilityList)
      {
        // checking if other abilities are linked to the one that just got activated
        if (otherAbility.content.linkedAbilities.indexOf(ability.content.key) > -1)
        {
         linkedAbilities.push(otherAbility);
        }

        //checking id the ability is linked to that other ability
        if (ability.content.linkedAbilities.find(key => key == otherAbility.content.key) != undefined)
        {
          linkedAbilities.push(otherAbility);
        }
      }
    }

    return linkedAbilities;
  }

  /** Activate an ability and unlock linked ones
   * 
   * @param character 
   * @param ability 
   */
  activateAbility(character:Character, ability: CharacterAbility): void 
  {
    ability.isActivated = true;
 
    for (var linkedCharacterAbility of this.getAllLinkedAbilities(character, ability))
    {
      linkedCharacterAbility.isUnlocked = true;
    }
  }

  /** Deactivate an ability an relock abilities that should be relocked
   * 
   * @param character 
   * @param ability 
   */
  deactivateAbility(character:Character, ability: CharacterAbility): void 
  {
    ability.isActivated = false;

    var exceptions = ["C1C","R1C","J1C"];

    for (var linkedCharacterAbility of this.getAllLinkedAbilities(character, ability))
    { 
      if (exceptions.find(key => linkedCharacterAbility.content.key == key) != undefined){
        break;
      }

      var distantLinkedAbility = this.getAllLinkedAbilities(character, linkedCharacterAbility);
      // at least one unlocked
      if (distantLinkedAbility.find(ab => ab.isActivated) != undefined)
      {
        break;
      }
      linkedCharacterAbility.isUnlocked = false;
    }
  }
  
  /**
   * Update modifiers for a character
   * @param character 
   */
  updateModifiers(character: Character) {

    // var equipementStats

    // character.stats.vigor.athletics.modifier = character.healthStatus.malus + character.
  }

  /** Apply changes on modifiers
   * 
   * @param statsCharacter 
   * @param statsToApply 
   */
  private applyModifiers(statsCharacter: Stats, statsToApply: SimpleStats) {
    for (let statKey in statsToApply) {
      switch(statKey) {
        case "ATH":
          statsCharacter.vigor.athletics.modifier+=statsToApply[statKey];
          break;
        case "ITM":
            statsCharacter.vigor.intimidation.modifier+=statsToApply[statKey];
            break;
        case "RES":
            statsCharacter.vigor.resistance.modifier+=statsToApply[statKey];
            break;
        case "MEL":
            statsCharacter.vigor.melee.modifier+=statsToApply[statKey];
            break;

        case "SNK":
            statsCharacter.dexterity.sneak.modifier+=statsToApply[statKey];
            break;
        case "DDG":
            statsCharacter.dexterity.dodge.modifier+=statsToApply[statKey];
            break;
        case "STL":
          statsCharacter.dexterity.stealth.modifier+=statsToApply[statKey];
          break;
        case "THR":
            statsCharacter.dexterity.throw.modifier+=statsToApply[statKey];
            break;

        case "KNL":
            statsCharacter.intelligence.knowledge.modifier+=statsToApply[statKey];
            break;
        case "PCP":
            statsCharacter.intelligence.perception.modifier+=statsToApply[statKey];
            break;
        case "PRP":
            statsCharacter.intelligence.preparation.modifier+=statsToApply[statKey];
            break;
        case "KNH":
            statsCharacter.intelligence.knowHow.modifier+=statsToApply[statKey];
            break;
        
        case "PRS":
            statsCharacter.charisma.persuasion.modifier+=statsToApply[statKey];
            break;
        case "LDS":
            statsCharacter.charisma.leadership.modifier+=statsToApply[statKey];
            break;
        case "BRV":
            statsCharacter.charisma.bravery.modifier+=statsToApply[statKey];
            break;
        case "ETQ":
            statsCharacter.charisma.etiquette.modifier+=statsToApply[statKey];
              break;
      }
    }
  }
}
