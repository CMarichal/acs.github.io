import { Injectable } from '@angular/core';
import { Race, Races } from 'model/race';
import { Job, Jobs } from 'model/job';
import { Character } from 'model/character';
import { Stats, SimpleStats } from 'model/stats';
import { MaterialCommons } from 'data/materialsBDD';
import { AbilitiesCommons, Ability, CharacterAbility } from 'model/abilities';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  racesList = Races.RacesList;
  jobsList = Jobs.JobList;
  materialList = MaterialCommons.MaterialList;
  abilitiesCommonsList = AbilitiesCommons.ABILITY_C_LIST;

  constructor() { }

  getRacesList(): Race[]
  {
    return this.racesList;
  }
  getJobsList(): Job[]
  {
    return this.jobsList;
  }
  getMaterialsList()
  {
    return this.materialList;
  }
  getAbilitiesCommonsList(): Ability[]
  {
    return this.abilitiesCommonsList;
  }

  activateAbility(character:Character, ability: CharacterAbility) 
  {
    ability.isActivated = true;
    
    var totalAbilities = [character.abilitiesCommon, character.abilitiesJob, character.abilitiesRace];

    // exterior to interior
    for (var abilityList of totalAbilities)
    {
      for (var otherAbility of abilityList)
      {
        // checking if other abilities are linked to the one that just got activated
        if (otherAbility.content.linkedAbilities.indexOf(ability.content.key) > -1)
        {
          let idx = abilityList.findIndex(ab=>ab.content.key == otherAbility.content.key);
          abilityList[idx].isUnlocked = true;
        }
      }
    }

    //interior to exterior

  }

  deactivateAbility(character:Character, ability: CharacterAbility) {
    ability.isActivated = false;

    var totalAbilities = [character.abilitiesCommon, character.abilitiesJob, character.abilitiesRace];
    var exceptions = ["C1C","R1C","J1C"];

    for (var abilityList of totalAbilities) {
      for (var otherAbility of abilityList) {
          // ?
      }
    }
  }
  
  updateModifiers(character: Character) {

    // var equipementStats
    
    // character.stats.vigor.athletics.modifier = character.healthStatus.malus + character.
  }

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
