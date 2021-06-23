import { Injectable } from '@angular/core';
import { Race, RacesList } from 'model/race';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  racesList: Race[] = RacesList;
  
  constructor() { }

  getRacesList()
  {
    return this.racesList;
  }
}
