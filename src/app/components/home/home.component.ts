import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { Character } from 'model/character';
import { Observable } from 'rxjs';
import { CharacterSheetManagementService } from '../../services/character-sheet-management.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uploadedFile: File;
  characterSheetToLoad: Character;
  availableCharacters$: Observable<Character[]>;

  constructor(
    private characterSheetManagementService: CharacterSheetManagementService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.availableCharacters$ = this.characterSheetManagementService.getAllCharacterSheets();
  }

  /**
   * Upload local json file
   */
  onChangeUploadFile(event) {
    this.uploadedFile = event.target.files[0];
  }

  /**
   * Import uploaded file
   */
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
              this.router.navigate(['character-sheet', character.id]);
          };
          readFile.readAsText(this.uploadedFile);
      }
  }

  /**
   * Create new character in database
   */
  onClickCreateButton() {
    this.router.navigate(['create-character']);
  }

  /**
   * Load a character in database
   */
  onClickLoadButton() {
    this.router.navigate(['character-sheet', this.characterSheetToLoad.id]);
  }



}
