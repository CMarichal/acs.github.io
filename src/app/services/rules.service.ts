import { Injectable } from '@angular/core';
import { Race, Races } from 'model/race';
import { Job, Jobs } from 'model/job';

@Injectable({
  providedIn: 'root'
})
export class RulesService {

  racesList = Races.RacesList;
  jobsList = Jobs.JobList;

  constructor() { }

  getRacesList()
  {
    return this.racesList;
  }
  getJobsList()
  {
    return this.jobsList;
  }
}
