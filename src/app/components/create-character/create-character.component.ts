import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'model/job';
import { Race } from 'model/race';
import { CharacterSheetManagementService } from 'src/app/services/character-sheet-management.service';
import { RulesService } from 'src/app/services/rules.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {

  racesList: Race[]; //used in the dropdown menu
  jobsList: Job[];

  characterName: string ="";
  characterJob: Job;
  characterRace: Race;

  constructor(
    private characterSheetManagementService: CharacterSheetManagementService,
    private rulesService: RulesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.racesList = this.rulesService.getRacesList();
    this.jobsList = this.rulesService.getJobsList();
  }

  onClickValidateButton() {
    var newCharacter = this.characterSheetManagementService.createCharacter(
                            this.characterName, 
                            this.characterRace, 
                            this.characterJob);
    this.router.navigate(['character-sheet', newCharacter.id]);
  }

}
