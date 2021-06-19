import { Component, OnInit } from '@angular/core';
import { testCharacter } from 'data/testCharacters';
import { Character } from 'model/character';
import { Race, RacesList } from 'model/race';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  racesList: Race[] = RacesList;
  character: Character= testCharacter;

  editMode: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickEditButton()  {
    if (!this.editMode)
    {
      this.editMode = true;
    }
    else
    {
      this.saveCharacter();
      this.editMode = false;
    }
    
  }

  saveCharacter() {

  }

}
