import { Component, OnInit } from '@angular/core';
import { testCharacter } from 'data/testCharacters';
import { Character } from 'model/character';
import { Race, RacesList } from 'model/race';
import { CharacterSheetManagementService } from '../services/character-sheet-management.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  racesList: Race[] = RacesList;
  character: Character= testCharacter;

  editMode: boolean = false;

  constructor(
    private characterSheetManagementService: CharacterSheetManagementService
  ) {  }

  ngOnInit(): void {
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

}
