import { Component, OnInit } from '@angular/core';
import { Character } from 'model/characterModel';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  character: Character;
  
  constructor() { }

  ngOnInit(): void {
  }

}
