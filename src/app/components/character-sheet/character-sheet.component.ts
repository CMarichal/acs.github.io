import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'model/character';
import { HealthStatuses } from 'model/healthStatus';
import { Race } from 'model/race';
import { Job } from 'model/job';
import { CharacterSheetManagementService } from '../../services/character-sheet-management.service';
import { RulesService } from '../../services/rules.service';
import { ItemManagement } from 'model/item';

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

  onHealthStatusChange() {
    this.rulesService.updateModifiers(this.character);
  }

  onClickAddWeapon() {
    var newWeapon = new ItemManagement.Weapon();
    newWeapon.id = this.character.armor.length;
    this.character.weapons.push();
  }

  onClickAddArmor() {
    var newArmor = new ItemManagement.Armor();
    newArmor.id = this.character.weapons.length;
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

}
