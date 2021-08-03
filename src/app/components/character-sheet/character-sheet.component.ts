import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'model/character';
import { HealthStatuses } from 'model/healthStatus';
import { CharacterSheetManagementService } from '../../services/character-sheet-management.service';
import { RulesService } from '../../services/rules.service';
import { ItemManagement } from 'model/item';
import { Capacity } from 'model/capacities';
import { Ability, CharacterAbility } from 'model/abilities';
import { Skill } from 'model/stats';
import { Observable } from 'rxjs';
import { Race, Races } from 'model/race';
import { Job, Jobs } from 'model/job';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  character$: Observable<Character>; // character to display
  character: Character = new Character("", Races.RACE_ARDENT_MAGES, Jobs.JOB_CAVALRY);
  characterRace: Race = null;
  characterJob: Job = null;
  characterVigorSkills: Skill[];
  characterDexteritySkills: Skill[];
  characterIntelligenceSkills: Skill[];
  characterCharismaSkills: Skill[];
  
  materialList?: ItemManagement.Material[];
  

  healthStatusList = HealthStatuses.HealthStatusesList;
  
  editMode: boolean = false;

  constructor(
    private characterSheetManagementService: CharacterSheetManagementService,
    private rulesService: RulesService,
    private route: ActivatedRoute,
    private router: Router
  ) {   }

  ngOnInit(): void {
    var characterId = this.route.snapshot.params.id;

    this.character$ = this.characterSheetManagementService.getCharacterSheet(characterId);
    this.character$.pipe(first()).subscribe(
      data => {
        this.loadCharacter(data);
        this.character = data;
      });
    this.materialList = this.rulesService.getMaterialsList();
    //this.abilitiesCommonsList = this.rulesService.getAbilitiesCommonsList();
  }

  /**
   * Provides the character's skills in the right order
   * @param character 
   */
  private reorderSkillsCharacter(character): void {
    this.characterVigorSkills = [
      character.stats.vigor.athletics,
      character.stats.vigor.intimidation,
      character.stats.vigor.melee,
      character.stats.vigor.resistance
    ];
    this.characterDexteritySkills = [
      character.stats.dexterity.sneak,
      character.stats.dexterity.dodge,
      character.stats.dexterity.throw,
      character.stats.dexterity.stealth
    ];

    this.characterIntelligenceSkills = [
      character.stats.intelligence.knowledge];
    if (character.stats.intelligence?.knowledges != undefined) {
      this.characterIntelligenceSkills =
        this.characterIntelligenceSkills.concat(character.stats.intelligence?.knowledges);
    }
    this.characterIntelligenceSkills = this.characterIntelligenceSkills.concat([
       character.stats.intelligence.perception,
       character.stats.intelligence.preparation,
       character.stats.intelligence.knowHow]);
    if (character.stats.intelligence?.knowHows != undefined) {
      this.characterIntelligenceSkills =
        this.characterIntelligenceSkills.concat(character.stats.intelligence?.knowHows);
    }

    this.characterCharismaSkills = [
      character.stats.charisma.persuasion,
      character.stats.charisma.leadership,
      character.stats.charisma.bravery,
      character.stats.charisma.etiquette
    ];
  }

  /**
   * Prepare the component to display the character
   * @param character 
   */
  private loadCharacter(character): void {
    this.reorderSkillsCharacter(character);
    this.characterRace = this.rulesService.getRacesList().find(race=> character.race == race.name);
    this.characterJob = this.rulesService.getJobsList().find(job=> character.job == job.name);
  }

  onClickEditButton()  {
    if (!this.editMode)
    {
      this.editMode = true;
    }
    else
    {
      this.characterSheetManagementService.saveCharacter(this.character);
      this.editMode = false;
      window.location.reload();
      //this.character$ = this.characterSheetManagementService.getCharacterSheet(this.character.id);
    }
    
  }

  onClickDownloadButton()
  {
    this.characterSheetManagementService.exportCharacterSheet(this.character);
  }

  // HEALTH STATUS MANAGEMENT

  onHealthStatusChange() {
    this.rulesService.updateModifiers(this.character);
  }

  // KNOWHOM & KNOWLEDGE MANAGEMENT

  onClickAddKnowledge() {
    var newKnowledge = new Skill();
    newKnowledge.baseValue = this.character.stats.intelligence.knowledge.baseValue;
    newKnowledge.name = "";
    newKnowledge.key = "KNL-CUSTOM-"+this.character.stats.intelligence.knowledges.length;
    this.character.stats.intelligence.knowledges.push(newKnowledge);
    this.characterIntelligenceSkills.push(newKnowledge);
  }

  onClickAddKnowHow() {
    var newKnowHow = new Skill();
    newKnowHow.baseValue = this.character.stats.intelligence.knowHow.baseValue;
    newKnowHow.name = "";
    newKnowHow.key = "KNH-CUSTOM-"+this.character.stats.intelligence.knowHows.length;
    this.character.stats.intelligence.knowHows.push(newKnowHow);
  }

  onClickDeleteKnowledge(knowledgeKey: string) {
    var id = this.character.stats.intelligence.knowledges.findIndex(skill => knowledgeKey == skill.key);
    this.character.stats.intelligence.knowledges.splice(id, 1);
  }

  onClickDeleteKnowHow(knowHowKey: string) {
    var id = this.character.stats.intelligence.knowHows.findIndex(skill => knowHowKey == skill.key);
    this.character.stats.intelligence.knowHows.splice(id, 1);
  }


  // ITEM MANAGEMENT

  onClickAddWeapon() {
    var newWeapon = new ItemManagement.Weapon();
    newWeapon.id = this.character.weapons.length;
    this.character.weapons.push(newWeapon);
  }

  onClickAddArmor() {
    var newArmor = new ItemManagement.Armor();
    newArmor.id = this.character.armor.length;
    this.character.armor.push(newArmor);
  }

  onClickAddItem() {
    var newItem = new ItemManagement.Item();
    newItem.id = this.character.inventory.length;
    this.character.inventory.push(newItem);
  }

  onClickDeleteWeapon(id: number) {
    this.character.weapons.splice(id, 1);
  }

  onClickDeleteArmor(id: number) {
    this.character.armor.splice(id, 1);
  }

  onClickDeleteItem(id: number) {
    this.character.inventory.splice(id, 1);
  }

  // CAPACITY MANAGEMENT 

  onClickAddCapacity() {
    var newCapacity = new Capacity();
    newCapacity.id = this.character.capacities.length;
    this.character.capacities.push(newCapacity);
  }

  onClickDeleteCapacity(id: number) {
    this.character.capacities.splice(id, 1);
  }

  // ABILITY MANAGEMENT

  onClickActivateAbility(ability: CharacterAbility) {
    this.rulesService.activateAbility(this.character, ability);
  }

  onClickDeactivateAbility(ability: CharacterAbility) {
    this.rulesService.deactivateAbility(this.character, ability);
  }

}
