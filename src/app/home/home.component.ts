import { Component, OnInit } from '@angular/core';
import { CharacterSheetManagementService } from '../services/character-sheet-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private characterSheetManagementService: CharacterSheetManagementService
  ) { }

  ngOnInit(): void {
  }

  onClickImportButton() {
    //import something
  }
}
