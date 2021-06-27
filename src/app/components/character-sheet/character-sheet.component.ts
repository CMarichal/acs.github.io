import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'model/character';
import { HealthStatuses } from 'model/healthStatus';
import { CharacterSheetManagementService } from '../../services/character-sheet-management.service';
import { RulesService } from '../../services/rules.service';
import { ItemManagement } from 'model/item';
import { Capacity } from 'model/capacities';
import { Ability, CharacterAbility } from 'model/abilities';
import { Skill } from 'model/stats';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  character: Character; // character to display
  
  materialList: ItemManagement.Material[];
  abilitiesCommonsList: Ability[];

  healthStatusList = HealthStatuses.HealthStatusesList;
  
  editMode: boolean = false;

  constructor(
    private characterSheetManagementService: CharacterSheetManagementService,
    private rulesService: RulesService,
    private route: ActivatedRoute
  ) {   }

  ngOnInit(): void {
    var characterId = this.route.snapshot.params.id;

    this.character = this.characterSheetManagementService.getCharacterSheet(characterId);

    this.materialList = this.rulesService.getMaterialsList();
    this.abilitiesCommonsList = this.rulesService.getAbilitiesCommonsList();
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
    this.character.stats.intelligence.knowledges.splice(id);
  }

  onClickDeleteKnowHow(knowHowKey: string) {
    var id = this.character.stats.intelligence.knowHows.findIndex(skill => knowHowKey == skill.key);
    this.character.stats.intelligence.knowHows.splice(id);
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
    this.character.weapons.splice(id);
  }

  onClickDeleteArmor(id: number) {
    this.character.armor.splice(id);
  }

  onClickDeleteItem(id: number) {
    this.character.inventory.splice(id);
  }

  // CAPACITY MANAGEMENT 

  onClickAddCapacity() {
    var newCapacity = new Capacity();
    newCapacity.id = this.character.capacities.length;
    this.character.capacities.push(newCapacity);
  }

  onClickDeleteCapacity(id: number) {
    this.character.capacities.splice(id);
  }

  // ABILITY MANAGEMENT

  onClickActivateAbility(ability: CharacterAbility) {
    this.rulesService.activateAbility(this.character, ability);
  }

  onClickDeactivateAbility(ability: CharacterAbility) {
    this.rulesService.deactivateAbility(this.character, ability);
  }

}
