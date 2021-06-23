import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Character } from 'model/character';
import { Race } from 'model/race';
import { CharacterSheetManagementService } from '../services/character-sheet-management.service';
import { RulesService } from '../services/rules.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  character: Character; // character to display

  racesList: Race[]; //used in the dropdown menu
  
  editMode: boolean = false;

  urlDownload;

  constructor(
    private characterSheetManagementService: CharacterSheetManagementService,
    private rulesService: RulesService,
    private route: ActivatedRoute
  ) {   }

  ngOnInit(): void {
    var characterId = this.route.snapshot.params.id;

    this.character = this.characterSheetManagementService.getCharacterSheet(characterId);

    this.racesList = this.rulesService.getRacesList();
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
    this.urlDownload = this.characterSheetManagementService.exportCharacterSheet(this.character);
  }

}
