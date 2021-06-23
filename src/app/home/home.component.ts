import { Component, OnInit } from '@angular/core';
import { Character } from 'model/character';
import { CharacterSheetManagementService } from '../services/character-sheet-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uploadedFile: File;

  constructor(
    private characterSheetManagementService: CharacterSheetManagementService,
  ) { }

  ngOnInit(): void {
  }

  onChange(event) {
    this.uploadedFile = event.target.files[0];
  }

  onClickImportButton() {
    if (this.uploadedFile.type !== "application/json") {
      alert("Wrong file type: " + this.uploadedFile.type); 
      return false;
    }
    if (this.uploadedFile) {
      var readFile = new FileReader();
      readFile.onload = (e) => { 
              var contents = e.target.result;
              var character: Character = JSON.parse(contents.toString());
              this.characterSheetManagementService.importCharacterSheet(character);
          };
          readFile.readAsText(this.uploadedFile);
      }
  }


}
