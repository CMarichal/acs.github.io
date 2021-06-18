import { Component, OnInit } from '@angular/core';
import { testCharacter } from 'data/testCharacters';
import { Character } from 'model/character';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  character: Character= testCharacter;

  constructor() { }

  ngOnInit(): void {
  }

}
