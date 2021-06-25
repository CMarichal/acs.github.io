import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'model/character';
import { HealthStatuses } from 'model/healthStatus';
import { Race } from 'model/race';
import { Job } from 'model/job';
import { CharacterSheetManagementService } from '../../services/character-sheet-management.service';
import { RulesService } from '../../services/rules.service';
import { ItemManagement } from 'model/item';
import { Capacity } from 'model/capacities';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  character: Character; // character to display
  
  racesList: Race[]; //used in the dropdown menu
  jobsList: Job[];
  materialList: ItemManagement.Material[];

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

    this.racesList = this.rulesService.getRacesList();
    this.jobsList = this.rulesService.getJobsList();
    this.materialList = this.rulesService.getMaterialsList();
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

}
